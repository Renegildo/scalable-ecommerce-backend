FROM node:14-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm i --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD [ "npm", "start" ]
