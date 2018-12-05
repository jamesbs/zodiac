FROM verdaccio/verdaccio:3

WORKDIR /verdaccio
RUN ls /verdaccio

COPY load-deps.js .

ENTRYPOINT ["/verdaccio/load-deps.js"]
