#Especificacion de la imagen de docker y su respectiva version 
FROM node:20-alpine 

#Especificamos lo que vamos a crear dentro del contenedor 

#Creamos un directorio de trabajo llamado app y le copiamos el contenido de package.json
WORKDIR /app
COPY package.json . 

#Apenas copie el package.json ejecutara el siguiente comando 
RUN npm install

#Especificamos que copie todo el contenido dentro del directorio de trabajo app
COPY . .

#le diremos que despues podra ejecutrar los siguiente comandos 
CMD npm start 