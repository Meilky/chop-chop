# ---- Base
FROM node:latest as base 

WORKDIR /usr/chop-chop/

COPY ./package.json .
COPY ./package-lock.json .
COPY ./src ./src
COPY ./index.html .
COPY ./style.css .
COPY ./svelte.config.js .
COPY ./tsconfig.json .
COPY ./tsconfig.node.json .
COPY ./vite.config.ts .

RUN npm install


# ---- Prod
FROM base as prod

CMD npm run build


# ---- Dev
FROM base as dev

CMD npm run watch
