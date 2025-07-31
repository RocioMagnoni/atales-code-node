# Etapa 1: Build del frontend con Vite
FROM node:18-alpine AS build-frontend

WORKDIR /app/frontend

# Copiamos solo el frontend
COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .
RUN npm run build

# Etapa 2: Backend + frontend ya compilado
FROM node:18-alpine

# Crear directorio para backend
WORKDIR /app/backend

# Copiar solo el backend
COPY backend/package*.json ./
RUN npm install

COPY backend/ .

# Copiar el build de frontend al public del backend
COPY --from=build-frontend /app/frontend/dist ./public

# Opcional: Copiar .env si estás usando uno local (no recomendado en prod)
# COPY backend/.env .env

# Expone el puerto del backend (usualmente 3001)
EXPOSE 3001

# Ejecutar el backend (ajusta el entrypoint si es distinto)
CMD ["node", "index.js"]
