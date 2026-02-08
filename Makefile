# Makefile for Docker-based Playwright screenshot generation
# Ensures screenshots are generated in the same environment as CI

PLAYWRIGHT_IMAGE := mcr.microsoft.com/playwright:v1.57.0-jammy
PROJECT_ROOT := $(shell pwd)
USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)

# Docker run command - runs as root but fixes permissions after
# Explicitly set PLAYWRIGHT_BROWSERS_PATH to use pre-installed browsers
DOCKER_RUN := docker run --rm \
	-v $(PROJECT_ROOT):/workspace \
	-w /workspace \
	-e PLAYWRIGHT_BROWSERS_PATH=/ms-playwright \
	$(PLAYWRIGHT_IMAGE)

# Base setup command for all pnpm operations in Docker
PNPM_SETUP := corepack enable && \
	corepack prepare pnpm@latest-9 --activate && \
	pnpm config set store-dir .pnpm-store && \
	pnpm install --force

# Helper to run a pnpm command in Docker
define run_pnpm
	$(DOCKER_RUN) bash -c "$(PNPM_SETUP) && $(1)"
endef

.PHONY: pull-image clean-screenshots generate-screenshots regenerate-screenshots test test-react test-web test-css build lint format clean docs-build docs-run docs-stop help

help:
	@echo "Docker-based Lifecycle Commands"
	@echo ""
	@echo "This makefile is designed to ease some of the burden of understanding"
	@echo "the package.json commands for this project, and reliably and repeatably"
	@echo "create screenshots for visual regression tests using playwright."
	@echo ""
	@echo "One of the key challenges in accurately generating visual regression"
	@echo "tests that will pass is that the inputs and outputs must be pixel-accurate."
	@echo ""
	@echo "For a setup like that to work in a CI environment, we must generate the"
	@echo "initial screenshots for comparison in an identical docker container, so that"
	@echo "details like font sizes, kerning tables, and aliasing algorithms are identical."
	@echo ""
	@echo "Main commands:"
	@echo "  build                  - Build all packages"
	@echo "  test                   - Run all tests (React, Web, CSS)"
	@echo "  test-react             - Run React component tests only"
	@echo "  test-web               - Run Web Component tests only"
	@echo "  test-css               - Run CSS-only tests only"
	@echo "  lint                   - Run linting"
	@echo "  format                 - Format code with prettier"
	@echo "  clean                  - Clean build artifacts"
	@echo ""
	@echo "Documentation:"
	@echo "  docs-build             - Build Docker image with all 4 Storybooks"
	@echo "  docs-run               - Run documentation container on port 9888"
	@echo "  docs-stop              - Stop running documentation container"
	@echo ""
	@echo "Playwright Screenshot management:"
	@echo "  generate-screenshots   - Generate new screenshots for all packages"
	@echo "  regenerate-screenshots - Clean then generate screenshots for all packages"
	@echo "  clean-screenshots      - Delete all screenshot directories"
	@echo ""
	@echo "Setup:"
	@echo "  pull-image             - Pull the Playwright Docker image"
	@echo ""
	@echo "Typical workflow:"
	@echo "  1. make pull-image               # First time only"
	@echo "  2. make build                    # Build packages"
	@echo "  3. make test                     # Run tests"
	@echo "  4. make regenerate-screenshots   # Update screenshots if needed"
	@echo ""
	@echo "Documentation workflow:"
	@echo "  1. make docs-build               # Build documentation container"
	@echo "  2. make docs-run                 # Run at http://localhost:9888"
	@echo "  3. make docs-stop                # Stop when done"

pull-image:
	@echo "Pulling Playwright Docker image..."
	docker pull $(PLAYWRIGHT_IMAGE)

clean-screenshots:
	@echo "WARNING: This will delete all screenshot directories across all packages"
	@echo "Press Ctrl+C to cancel, or Enter to continue..."
	@read confirmation
	@echo "Deleting screenshot directories..."
	find packages/ui-react/src -type d -name "__screenshots__" -exec rm -rf {} + 2>/dev/null || true
	find packages/ui-web/tests -type d -name "__screenshots__" -exec rm -rf {} + 2>/dev/null || true
	find packages/ui-css/tests -type d -name "__screenshots__" -exec rm -rf {} + 2>/dev/null || true
	@echo "Screenshot directories deleted."

build:
	@echo "Building in Docker container..."
	$(call run_pnpm,pnpm build)

test:
	@echo "Running all tests (React, Web, CSS) in Docker container..."
	$(call run_pnpm,pnpm build && cd packages/ui-react && pnpm test && cd ../ui-web && pnpm test && cd ../ui-css && pnpm test)

test-react:
	@echo "Running React component tests in Docker container..."
	$(call run_pnpm,pnpm build && cd packages/ui-react && pnpm test)

test-web:
	@echo "Running Web Component tests in Docker container..."
	$(call run_pnpm,pnpm build && cd packages/ui-web && pnpm test)

test-css:
	@echo "Running CSS-only tests in Docker container..."
	$(call run_pnpm,pnpm build && cd packages/ui-css && pnpm test)

lint:
	@echo "Running lint in Docker container..."
	$(call run_pnpm,pnpm lint)

format:
	@echo "Running format in Docker container..."
	$(call run_pnpm,pnpm format)

clean:
	@echo "Cleaning in Docker container..."
	$(call run_pnpm,pnpm clean)

generate-screenshots:
	@echo "Generating screenshots for all packages in Docker container..."
	$(call run_pnpm,pnpm build && \
		cd packages/ui-react && pnpm test:updatesnaps && \
		cd ../ui-web && pnpm test:updatesnaps && \
		cd ../ui-css && pnpm test:updatesnaps && \
		cd ../.. && chown -R $(USER_ID):$(GROUP_ID) packages/ui-react/src packages/ui-web/tests packages/ui-css/tests 2>/dev/null || true)

regenerate-screenshots: clean-screenshots generate-screenshots

# Documentation Docker commands
docs-build:
	@echo "Building documentation Docker image with all 4 Storybooks..."
	docker build -t packets-docs .

docs-run:
	@echo "Starting documentation container on http://localhost:9888..."
	@echo "Documentation will be available at:"
	@echo "  / (root)    - Host documentation (main hub)"
	@echo "  /react      - React Components Storybook"
	@echo "  /web        - Web Components Storybook"
	@echo "  /css        - CSS Components Storybook"
	@echo ""
	@echo "Press Ctrl+C to stop the container"
	@echo ""
	@docker stop packets-docs 2>/dev/null || true
	@docker rm packets-docs 2>/dev/null || true
	docker run --rm --name packets-docs -p 9888:80 packets-docs

docs-stop:
	@echo "Stopping documentation container..."
	docker stop packets-docs || true
	docker rm packets-docs || true
