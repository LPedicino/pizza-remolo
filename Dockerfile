# Etapa 1: Compilación del proyecto con Node
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir la app con Nginx
FROM nginx:alpine
# Cambiamos /app/dist por /app/build 👇
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]