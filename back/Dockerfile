FROM alpine:3.10

RUN apk add npm

COPY package*.json /var/www/

WORKDIR /var/www

RUN npm install

COPY . /var/www/

CMD ["npm", "start"]