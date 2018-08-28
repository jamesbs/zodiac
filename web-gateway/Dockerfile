FROM node:10-alpine

RUN mkdir /app
WORKDIR /app
RUN npm i -g yarn

COPY . .
RUN yarn
COPY ../lang-item/service/src/service.proto .

CMD ["/usr/local/bin/yarn", "start"]
