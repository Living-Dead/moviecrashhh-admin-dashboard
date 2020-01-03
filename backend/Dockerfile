FROM node:10-alpine
RUN apk add python2 make g++
RUN npm install express nodemon -g
WORKDIR /home/app
USER node
CMD npm install ; nodemon --exec babel-node ./app.js
