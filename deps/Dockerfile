FROM verdaccio/verdaccio:3

RUN mkdir /verdaccio
WORKDIR /verdaccio

COPY load-deps.js .

ENTRYPOINT ["/verdaccio/load-deps"]
