FROM node:8.12.0-alpine
# This image is based on another image, node

WORKDIR /usr/app

COPY package.json .
RUN yarn install --silent

COPY . .

EXPOSE 3000
#expose network connection

CMD [ "yarn", "run", "start" ]
#Specifies the cmd when the container starts