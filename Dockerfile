## BUILDER
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache openssl

COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npx prisma generate --schema=prisma/tenant.prisma
RUN npx prisma generate --schema=prisma/schema.prisma

RUN npm run build
RUN ls -la .next
RUN chmod -R 777 .next

## PRODUCTION
FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next. ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

RUN npm ci --only=production

EXPOSE 3000

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

EXPOSE 3000

CMD ["npm", "run", "dev"]
