FROM node:18.12.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "npm", "start"]