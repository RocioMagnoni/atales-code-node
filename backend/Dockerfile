# backend/Dockerfile

FROM node:18

# Crear carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo package.json y package-lock.json primero (para cache de dependencias)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del backend
COPY . .
#COPY .env .env  
# <- esta línea agrega el archivo al contenedor, luego en el codigo yaml lo reemplazamos por el secreto de kubernetes

# Exponer el puerto que uses (ajustalo si no es 3001)
EXPOSE 3001

# Comando para ejecutar el backend
CMD ["node", "index.js"]

