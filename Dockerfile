FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i --legacy-peer-deps && npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]