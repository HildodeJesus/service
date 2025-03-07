FROM nginx:alpine

RUN apk add --no-cache curl ca-certificates

RUN addgroup -S nginxgroup && adduser -S nginxuser -G nginxgroup

RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

WORKDIR /etc/nginx

COPY nginx/conf.d/ /etc/nginx/conf.d/
COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginxuser:nginxgroup /var/cache/nginx /etc/nginx/conf.d /var/log/nginx

RUN mkdir -p /var/lib/nginx/body && \
  mkdir -p /var/lib/nginx/proxy && \
  mkdir -p /var/lib/nginx/fastcgi && \
  chown -R nginxuser:nginxgroup /var/lib/nginx

ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

EXPOSE 80

USER nginxuser

CMD ["nginx", "-g", "daemon off;"]