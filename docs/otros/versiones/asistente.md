---
description: >-
  Proyecto con integraciones como discord Bot, Web, Whatsapp Bot, api privada y
  publica
---

# Asistente

## 0.0.9

`25 Diciembre de 2024`

* `Fix:` configuración de Prettier, agregar nuevo emoji para renombrar y eliminar archivo obsoleto de PM2; ajustar rutas de renderizado y agregar nuevas funcionalidades en el controlador de API
* `Add:`  integración de WhatsApp con respuestas automáticas y registro de historial de mensajes
* `Add:`  nuevos archivos JavaScript y SCSS para funcionalidades de interfaz; incluir iconos SVG
* `Add:`  nuevos archivos y configuraciones para el asistente; eliminar archivos obsoletos
* `Add:`  soporte para internacionalización con i18next; crear archivos de traducción en inglés y español; extender la interfaz de solicitud para incluir el idioma
* `Add:` validación de autenticación y nuevas rutas; eliminar documentación obsoleta
* `Delete:`  el adaptador de Playwright y simplificar la configuración de Puppeteer en WhatsApp

## 0.0.10

`28 Diciembre de 2024`

* `Fix`: configuración del bot, agregar nuevos emojis y mejorar la gestión de tareas y tickets
* `Add`: soporte para criptomonedas; incluir modelo BotCrypto, nuevas rutas y controlador para registro y visualización de bots&#x20;
* `Add`: soporte para múltiples idiomas en el comando ping; implementar traducciones y ajustar la lógica de interacción&#x20;
* `Fix`: documentación de la API; actualizar descripciones y ejemplos en las rutas de salud y fuente

## 0.0.11

`28 Diciembre de 2024`

* `Add`: soporte para gestión de invitaciones; implementar registro de eventos de miembros en el canal de logs&#x20;
* `Add`: soporte para SQLite; incluir configuración y rutas para manejar órdenes y fuentes&#x20;
* `Add`: webhook de consola y actualizar rutas de API; mejorar configuración del bot&#x20;

## 0.0.12

`30 Diciembre de 2024`

* `Fix`: rutas de API para usar plural; agregar manejo de errores personalizados&#x20;
* `Add`: archivos de configuración para prettier y eslint; optimizar el formato de código en varios archivos
* `Add`: archivos de tipos y mapas para ModMail; eliminar archivos obsoletos de configuración
* `Add`: funcionalidad para crear y gestionar productos; actualizar rutas y vistas relacionadas&#x20;
* `Add`: nuevos tipos y archivos de configuración; eliminar archivos obsoletos y mejorar la estructura del proyecto
* `Fix`: la legibilidad del código y ajustar configuraciones de prettier; agregar nuevas rutas a .prettierignore

## 0.0.13

`01 Enero de 2025`

* `Add`: comandos NSFW y mejorar la gestión de eventos de depuración
* `Add`: funcionalidad de monitoreo y estadísticas del bot; incluir nueva política de seguridad&#x20;
* `Add`: modelos de registro de advertencias y logs de servidor; actualizar comandos de administración&#x20;
* `Delete`: dependencia de quick.db; agregar funcionalidad de paginación en embeds&#x20;
* `Fix`: manejo de errores en el modal y actualizar rutas; agregar nuevas variables de entorno&#x20;
* `Resume`: el middleware de autenticación eliminando la verificación de encabezados&#x20;