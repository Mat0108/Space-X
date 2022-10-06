FROM node:13.12.0-alpine as node

EXPOSE 3000:3000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]