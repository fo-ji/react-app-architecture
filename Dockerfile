# FROM node:18.16.0-slim
FROM cypress/base:18.16.0

WORKDIR /app

RUN yarn install --frozen-lockfile

COPY . .

RUN npx cypress install
