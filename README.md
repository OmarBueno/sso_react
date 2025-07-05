# SSO con React y Microsoft Entra ID

Esta aplicación demuestra cómo realizar Single Sign-On (SSO) con Microsoft Entra ID utilizando React y MSAL. Después de autenticarse se consulta Microsoft Graph para obtener información del usuario y se muestra en una tarjeta responsiva.

## Configuración
1. Copia el archivo `.env.sample` a `.env` y agrega los valores reales de tu aplicación registrada en Entra ID:
   ```env
   REACT_APP_AZURE_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   REACT_APP_AZURE_TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación de desarrollo:
  ```bash
  npm start
  ```
   Si la página aparece en blanco asegúrate de haber ejecutado primero `npm install` y de que los valores en `.env` sean correctos.

## Cómo funciona
- Se utiliza **MSAL** para manejar la autenticación en el navegador sin almacenar secretos en el código.
- Tras iniciar sesión se obtiene un token para consultar Microsoft Graph y se solicita el perfil del usuario (`displayName`, `mail`, `mailNickname`, `employeeId`, `jobTitle`).
- La información se muestra en una tarjeta con un icono de usuario.

## Scripts disponibles
- `npm start` &ndash; ejecuta la app en modo desarrollo.
- `npm test` &ndash; ejecuta las pruebas.
- `npm run build` &ndash; compila la versión de producción.
