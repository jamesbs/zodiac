FROM node:10-alpine

RUN mkdir /verdaccio
WORKDIR /verdaccio

RUN addgroup -S verdaccio && adduser -S -G verdaccio verdaccio && \
    chown -R verdaccio:verdaccio . && \
    chown -R verdaccio:verdaccio /verdaccio

USER verdaccio

COPY .npmrc $HOME
COPY config.yaml conf/config.yaml
COPY package.json .
COPY yarn.lock .
COPY main.js .
COPY publish.json .

COPY node node

RUN npx yarn

CMD ["/verdaccio/main.js"]
