# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=dev
# production

# Allow installing packages globaly
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin 

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 
# Run with --production if for prod, won't be able to install dev dependencies

COPY . .

CMD ["./node_modules/mocha/bin/_mocha"]
