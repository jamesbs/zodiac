FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

RUN npm install -g yarn

COPY . .
RUN chmod +x main.js

ENTRYPOINT ["/app/main.js"]
