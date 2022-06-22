FROM node18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD . .
ENV NODE_ENV production
RUN npm build
