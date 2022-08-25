FROM node:14-slim
WORKDIR /user/src/app
# COPY ./package.json ./
# COPY ./yarn.lock ./
COPY . .
RUN yarn
EXPOSE 3000
ENTRYPOINT [ "yarn" ]
CMD [ "start" ]