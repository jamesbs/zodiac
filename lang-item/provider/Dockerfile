FROM node:10-alpine

RUN mkdir /app
WORKDIR /app
RUN npm i -g yarn

COPY . .
RUN yarn

CMD ["/usr/local/bin/yarn", "start"]
