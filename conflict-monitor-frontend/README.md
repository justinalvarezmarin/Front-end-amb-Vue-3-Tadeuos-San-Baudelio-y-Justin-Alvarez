# conflict-monitor-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# 🚀 Notas del Frontend (Vue + Vercel)

Este es el resumen de los "marroneos" que hemos tenido montando la web y cómo los fuimos arreglando.

### 1. El misterio del Error 404 (Pantalla en blanco)
**El problema:** Al refrescar la página o entrar en una ruta directa, Vercel daba un error 404.
**La solución:** Tuvimos que crear un archivo llamado `vercel.json` en la raíz. 
* **Ojo:** Al principio lo llamamos `Vercel.json` (con la V mayúscula) y Vercel pasó de nosotros. Tiene que ser todo en minúsculas.
* **Qué hace:** Le dice a Vercel que todas las rutas las mande al `index.html`, porque Vue es el que manda con el Router.

### 2. El error "Connection Refused" (Localhost)
**El problema:** En la consola salía que la web intentaba buscar los datos en `localhost:8080`.
**La solución:** En el archivo de servicios (`ConflictService.js`), cambiamos la URL fija por una variable de entorno:
`const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';`
* **Importante:** Luego en el panel de Vercel (Settings > Environment Variables) hay que añadir esa variable `VITE_API_URL` con la dirección real de Railway.

### 3. ¿Dónde está mi código? (Output Directory)
**El problema:** Vercel no encontraba la web después de compilar.
**La solución:** En los ajustes de Vercel, tuvimos que decirle que la carpeta de salida es `dist`. Es donde Vite guarda todo el "pescado" cuando termina de construir la app.