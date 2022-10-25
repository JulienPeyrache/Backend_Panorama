FROM node:16.17-alpine3.15

WORKDIR /usr/app

COPY package*.json ./

RUN npm i --silent

COPY . .

RUN apk add --no-cache bash

# Install wait-for-it
RUN mkdir /wait-for-it \
  && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh --output-document /wait-for-it/wait-for-it.sh \
  && chmod +x /wait-for-it/wait-for-it.sh

COPY docker-entrypoint.sh /

RUN npm run build

RUN chmod +x /docker-entrypoint.sh

CMD [ "/docker-entrypoint.sh" ]