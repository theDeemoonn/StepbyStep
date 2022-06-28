FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json

ADD . .
RUN yarn run build

RUN yarn

CMD ["yarn", "start"]
EXPOSE 80