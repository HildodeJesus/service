## BUILDER
FROM node:20-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma

RUN npm install

COPY . .

RUN npx prisma generate --schema=prisma/tenant.prisma
RUN npx prisma generate --schema=prisma/schema.prisma

RUN npm run build

RUN npm prune --production

## PRODUCTION
FROM node:20-slim AS production

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init openssl

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/tailwind.config.ts ./
COPY --from=builder /app/postcss.config.mjs ./


RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/prisma ./prisma

RUN npm install --only=production

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]

## DEVELOPMENT
FROM node:20-slim AS development

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm install
COPY . .

RUN npx prisma generate --schema=prisma/tenant.prisma
RUN npx prisma generate --schema=prisma/schema.prisma

ENV NODE_ENV=development
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "run", "dev"]