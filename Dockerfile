FROM node:18.16.0-slim

WORKDIR /app

RUN yarn install --frozen-lockfile

COPY . .