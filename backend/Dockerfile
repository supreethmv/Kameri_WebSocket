# base image
FROM node:12.2.0
# FROM node:10.15.3

RUN mkdir -p /usr/src/app
# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
#COPY package*.json ./
#RUN npm install

# add app
COPY . .

RUN npm install

#EXPOSE 3000
#CMD node receive_logs.js
CMD ["npm", "run", "start"]
#CMD ["./wait-for-it.sh", "amqp://rabbitmq_service:5672", "--", "npm", "run", "start"]
#CMD ./node_modules/.bin/bats wait-for.bats

#CMD sh -c './backend/wait-for rabbitmq_service:5672 -- npm start'