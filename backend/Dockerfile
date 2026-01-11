# Instala a imagem do node.js
FROM node:20-alpine

# Define a pasta do projeto 
WORKDIR /app

# Copia primeiro os arquivos de dependência
COPY package*.json ./
COPY prisma ./prisma/

# Instala as dependências
RUN npm install

# Copia todos os arquivos da pasta princiipal
COPY . .

# Gera o prisma client
RUN npx prisma generate

# Converte ts para js
RUN npm run build

# Inicia o migrate do prisma e a aplicação
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]

EXPOSE 3000