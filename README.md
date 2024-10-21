# Nombre del Proyecto

MERN_Typescript - CRUD TASK
Este es un proyecto que utiliza el stack MERN (MongoDB, Express, React, Node.js) y TypeScript para la gestión de tareas. Permite crear, actualizar y eliminar tareas de manera sencilla.

## Tecnologías Usadas

- Lista de tecnologías, bibliotecas y herramientas utilizadas en el proyecto. Por ejemplo:
  - Node.js
  - React
  - Express
  - MongoDB
  - TypeScript
  - Bootswatch/Bootstrap
  - Otras bibliotecas relevantes

## Instalación

Deberás tener MongoDB instalado y corriendo en tu máquina
```bash
# Clona el repositorio
git clone https://github.com/AndresGuzman04/MERN_Typescript.git

# Navega al directorio del proyecto
# Dirígete a la carpeta del proyecto:

cd MERN_Typescript

#Instala dependencias para el backend

cd api

Remove-Item -Recurse -Force node_modules
npm install

# Instala dependencias para el frontend

cd ..  # Si estabas en el backend
cd frontend  # O la carpeta que contenga el frontend
npm install

# Configura variables de entorno(Opcional)

# Inicia el servidor del backend
# Vuelve al directorio del backend y ejecuta el servidor:
npm run dev


# Inicia el servidor del frontend
# Asegúrate de estar en el directorio del frontend
npm start

