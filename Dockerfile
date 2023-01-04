FROM node:alpine
RUN apk add --no-cache \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev
WORKDIR /usr/src/app
ADD ["dist/dist.js", "package*.json", "/usr/src/app/"]
RUN npm i --omit=dev
EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["dist.js"]