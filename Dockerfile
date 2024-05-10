FROM node:18.19.0-alpine as base
ENV NPM_CONFIG_USERCONFIG=/kaniko/secret/npmrc
WORKDIR /app/

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production


FROM base as builder
RUN yarn install --frozen-lockfile --production=false

COPY . .

ARG BUILD_BRANCH
ARG ENV_BRANCHES
RUN ./env-preset.sh $BUILD_BRANCH "$ENV_BRANCHES"
RUN yarn build 

FROM base

ARG BUILD_BRANCH
ENV NODE_ENV=production

COPY . .
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/.env.$BUILD_BRANCH /app/.env.$BUILD_BRANCH

EXPOSE 3000

