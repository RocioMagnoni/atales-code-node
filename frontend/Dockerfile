# Etapa 1: Construcción del frontend con Vite
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor NGINX
FROM nginx:alpine

# Eliminar archivos por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos construidos por Vite (carpeta dist)
COPY --from=builder /app/dist /usr/share/nginx/html

# ✅ Copiar tu archivo default.conf personalizado
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

