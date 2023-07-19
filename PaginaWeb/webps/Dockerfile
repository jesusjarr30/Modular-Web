FROM node:18.7.0-alpine
WORKDIR /webps

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json* ./
COPY tailwind.config.js ./


RUN npm install 
RUN npm install react-scripts@5.0.1 -g --silent


COPY . ./

CMD ["npm", "start"]

