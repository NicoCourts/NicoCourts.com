FROM node:latest

ENV APP_ROOT /

RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

RUN npm install && ng build --prod

EXPOSE 80
