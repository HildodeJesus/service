## BUILDER
FROM node:20-alpine AS builder

RUN apk add --no-cache openssl libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma
COPY next.config.mjs ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=prisma/tenant.prisma
RUN npx prisma generate --schema=prisma/schema.prisma

RUN npm run build

## PRODUCTION
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV BASE_URL "localhost:3000"

CMD ["npm", "start"]

## DEVELOPMENT
FROM node:20-alpine AS development

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm install
COPY . .

RUN npx prisma generate --schema=prisma/tenant.prisma
RUN npx prisma generate --schema=prisma/schema.prisma

ENV NODE_ENV=development
ENV PORT 3000
ENV BASE_URL "localhost:3000"

EXPOSE 3000

CMD ["npm", "run", "dev"]
