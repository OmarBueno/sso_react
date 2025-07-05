# Aplicación React con Autenticación Microsoft Entra ID y Microsoft Graph

Este proyecto demuestra cómo implementar Single Sign-On (SSO) en una aplicación React utilizando **MSAL** y consultar datos del perfil del usuario con **Microsoft Graph**.

## Características

- Inicio de sesión mediante Microsoft Entra ID.
- Obtención de token de acceso para llamar a Microsoft Graph.
- Visualización de datos básicos del usuario en una tarjeta.
- Cierre de sesión.

## Requisitos Previos

- Node.js 18+
- Una cuenta de Azure con permisos para registrar aplicaciones.

## Configuración

### 1. Registrar una aplicación en Azure Portal

1. Accede al [Azure Portal](https://portal.azure.com/).
2. Ve a **Microsoft Entra ID → Registros de aplicaciones**.
3. Selecciona **+ Nuevo registro**.
4. Introduce un **Nombre** (ej. `ReactMsGraphApp`).
5. En **URI de redirección**, selecciona **Aplicación web** e introduce `http://localhost:3000`.
6. Haz clic en **Registrar**.
7. Copia el **Id. de aplicación (cliente)** y el **Id. de directorio (inquilino)**.

### 2. Configurar Permisos de Microsoft Graph

1. En la aplicación registrada, ve a **Permisos de API**.
2. Elige **Microsoft Graph → Permisos delegados**.
3. Agrega el permiso `User.Read` y guarda los cambios.

## Instalación y Ejecución Local

1. Clona este repositorio (o descarga los archivos).
2. Copia `.env.sample` a `.env` y coloca tus valores reales:
   ```env
   REACT_APP_AZURE_CLIENT_ID="TU_CLIENT_ID"
   REACT_APP_AZURE_TENANT_ID="TU_TENANT_ID"
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación de desarrollo:
   ```bash
   npm start
   ```

Si ves una página en blanco, asegúrate de haber ejecutado `npm install` y que los valores de `.env` sean correctos.

## Flujo de la Aplicación

1. Al entrar se muestra un mensaje "Bienvenido" y un botón **Iniciar sesión**.
2. El usuario se autentica con Microsoft Entra ID.
3. Tras iniciar sesión, se solicita a Microsoft Graph el nombre, el correo, el *mailNickname*, el *employeeId* y el *jobTitle*.
4. Los datos se presentan en una tarjeta junto a un botón **Cerrar sesión**.
5. Al pulsar **Cerrar sesión** se termina la sesión en la aplicación y en Entra ID.

## Solución de Problemas Comunes

- **redirect_uri_mismatch**: verifica que `http://localhost:3000` esté configurado como URI de redirección en Azure Portal.
- **Variables no definidas**: comprueba que `REACT_APP_AZURE_CLIENT_ID` y `REACT_APP_AZURE_TENANT_ID` estén presentes en tu `.env`.

## Scripts Disponibles

- `npm start` &ndash; ejecuta la app en modo desarrollo.
- `npm test` &ndash; ejecuta las pruebas.
- `npm run build` &ndash; genera la versión de producción.
