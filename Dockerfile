FROM node:latest

RUN npm install -g pnpm

WORKDIR /tmp
COPY package.json /tmp/
RUN pnpm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

WORKDIR /usr/src/app
RUN pnpm test

WORKDIR /usr/src/app
RUN pnpm build

ENV NODE_ENV=production
ENV PORT=4000

CMD [ "/usr/local/bin/node"]

EXPOSE 4000
