# build environment
FROM node:lts-alpine as builder

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ARG REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

COPY . /app

RUN npm install
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine

RUN rm -rf /etc/nginx/conf.d && \
    mkdir -p /etc/nginx/conf.d

COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
