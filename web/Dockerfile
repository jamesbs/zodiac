FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

RUN npm install -g yarn

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . .

ENTRYPOINT ["/usr/local/bin/yarn", "start"]
