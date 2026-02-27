FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g corepack@latest
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build all packages first
RUN pnpm run build

# Build all Storybooks with their respective base paths
# Host docs at root (no base path needed)
RUN cd apps/host-docs && pnpm run build

# React docs at /react
RUN cd apps/react-docs && pnpm run build

# Web docs at /web
RUN cd apps/web-docs && pnpm run build

# CSS docs at /css
RUN cd apps/css-docs && pnpm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all Storybook builds
COPY --from=build /app/apps/host-docs/storybook-static/ ./host-docs/
COPY --from=build /app/apps/react-docs/storybook-static/ ./react-docs/
COPY --from=build /app/apps/web-docs/storybook-static/ ./web-docs/
COPY --from=build /app/apps/css-docs/storybook-static/ ./css-docs/

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
