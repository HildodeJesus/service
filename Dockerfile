## BUILDER
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat openssl1.1-compat

COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

## PRODUCTION
FROM node:20-alpine AS production

WORKDIR /app

RUN apk add --no-cache libc6-compat openssl1.1-compat

ENV NODE_ENV production

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

RUN npm install --only=production

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]

## DEVELOPMENT
FROM node:20-alpine AS development

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

ENV NODE_ENV=development

EXPOSE 3000

CMD ["npm", "run", "dev"]
