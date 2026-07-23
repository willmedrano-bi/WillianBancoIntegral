#imagen con versión reducida
FROM nginx:alpine
#copiando configuracion
COPY nginx.conf /etc/nginx/conf.d/default.conf
#exponemos el puerto
EXPOSE 80
