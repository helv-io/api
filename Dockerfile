FROM node:alpine
RUN apk add --no-cache \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    terminus-font \
    ttf-inconsolata \
    font-noto \
    font-noto-cjk \
    ttf-font-awesome \
    font-noto-extra \
    font-noto-emoji
WORKDIR /usr/src/app
ADD ["dist/dist.js","font","package*.json","/usr/src/app/"]
RUN npm i --omit=dev
EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["dist.js"]