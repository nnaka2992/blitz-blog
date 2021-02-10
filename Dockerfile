FROM node:15.8.0-buster

RUN apt update &&\
    apt install git &&\
    npm install -g blitz@0.30.0
