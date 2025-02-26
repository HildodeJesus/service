## BUILDER
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

## PRODUCTION
FROM node:20 AS production

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm install --only=production

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]

## DEVELOPMENT
FROM node:20 AS development

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

ENV NODE_ENV=development

EXPOSE 3000

CMD ["npm", "run", "dev"]
