# 🍕 Pizza Rémolo - Infraestructura Contenedorizada & Reverse Proxy

Este repositorio contiene la arquitectura de infraestructura local para la aplicación **Pizza Rémolo**, implementando un entorno inmutable, seguro y persistente utilizando Docker y Nginx.

## 🏗️ Arquitectura del Sistema

La infraestructura se compone de tres servicios principales aislados en una red privada virtual de Docker (`red-tienda`):

* **Frontend (React):** Servido de forma estática en producción optimizada a través de un contenedor Nginx.
* **Backend API (Node/json-server):** Servicio interno que gestiona el menú y los datos de la aplicación. Su puerto nativo (`3001`) está completamente aislado del exterior por seguridad.
* **Reverse Proxy (Nginx):** El único punto de entrada público expuesto al host (Puerto `80`). Se encarga de recibir el tráfico y enrutarlo internamente:
    * Las peticiones a `/api/*` se redirigen al contenedor de la API (removiendo el prefijo).
    * El resto del tráfico se deriva al Frontend.

## 💾 Persistencia de Datos

Para evitar la volatilidad de los datos al destruir o recrear contenedores, se implementó un **Volumen de Docker** inmutable (`datos-backend`) mapeado directamente al directorio `/data` del backend. Esto asegura que la base de datos `db.json` mantenga su estado ante cualquier ciclo de vida del contenedor (`docker compose down`).

## 🚀 Despliegue Local

### Requisitos Previos
* Docker Desktop instalado y corriendo.

### Pasos para inicializar el entorno

1. Clonar el repositorio.
2. Levantar la infraestructura completa forzando la compilación optimizada:
   ```bash
   docker compose up -d --build