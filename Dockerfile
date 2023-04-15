# Imagen base
FROM node:18.16.0-alpine

# Establecer el directorio de trabajo
WORKDIR /app


# Copiar los archivos necesarios para instalar las dependencias
COPY package.json ./

# Instalar las dependencias
RUN npm install

# Servir la aplicación
CMD ["npm", "run", "dev"]