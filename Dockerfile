FROM  node:carbon=alpine

WORKDIR /srv/server

COPY package.json ./

RUN yarn install