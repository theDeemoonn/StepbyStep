FROM node:18.2-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD . .
ENV NODE_ENV production
RUN npm build
RUN npm prume --production
CMD ["npm", "start"]
EXPOSE 8080