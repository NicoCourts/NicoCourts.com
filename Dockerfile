# STAGE 1: BUILD
FROM node:10-alpine as builder

COPY package.json package-lock.json ./

# Prevent redundant npm installs
RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app
COPY . .

# Build the project
RUN $(npm bin)/ng build --prod

# STAGE 2: SETUP
FROM nginx:latest

# Copy in the nginx config files
COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /etc/nginx/conf.d/*

# Copy in the dhparams
COPY dhparam/dhparam-4096.pem /etc/ssl/certs/dhparam-4096.pem

# Copy in live files
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ng-app/dist/website /usr/share/nginx/html
COPY .well-known /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
