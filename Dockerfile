FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN yarn install
ADD . .
ENV NODE_ENV production
RUN yarn
RUN yarn  --production
CMD ["yarn", "start"]
EXPOSE 80