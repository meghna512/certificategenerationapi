FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN apt update
RUN apt install imagemagick
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]