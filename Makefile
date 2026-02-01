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

.PHONY: pull-image clean-screenshots generate-screenshots regenerate-screenshots test build lint format clean help

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
	@echo "  test                   - Run all tests"
	@echo "  lint                   - Run linting"
	@echo "  format                 - Format code with prettier"
	@echo "  clean                  - Clean build artifacts"
	@echo ""
	@echo "Playwright Screenshot management:"
	@echo "  generate-screenshots   - Generate new screenshots"
	@echo "  regenerate-screenshots - Clean then generate screenshots"
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

pull-image:
	@echo "Pulling Playwright Docker image..."
	docker pull $(PLAYWRIGHT_IMAGE)

clean-screenshots:
	@echo "WARNING: This will delete all screenshot directories in packages/ui/src"
	@echo "Press Ctrl+C to cancel, or Enter to continue..."
	@read confirmation
	@echo "Deleting screenshot directories..."
	find packages/ui/src -type d -name "__screenshots__" -exec rm -rf {} + 2>/dev/null || true
	@echo "Screenshot directories deleted."

build:
	@echo "Building in Docker container..."
	$(call run_pnpm,pnpm build)

test:
	@echo "Running tests in Docker container..."
	$(call run_pnpm,pnpm build && pnpm test)

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
	@echo "Generating screenshots in Docker container..."
	$(call run_pnpm,pnpm build && pnpm test:updatesnaps && chown -R $(USER_ID):$(GROUP_ID) packages/ui/src 2>/dev/null || true)

regenerate-screenshots: clean-screenshots generate-screenshots
