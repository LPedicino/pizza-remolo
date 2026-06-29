FROM node:18-alpine

# Instalar la herramienta de API globalmente en el contenedor
RUN npm install -g json-server

WORKDIR /data

# Copiar nuestra base de datos adentro
COPY db.json /data/db.json

EXPOSE 3001

# Comando para arrancar la API en el puerto 3001 permitiendo conexiones externas (--host 0.0.0.0)
CMD ["json-server", "--watch", "db.json", "--port", "3001", "--host", "0.0.0.0"]