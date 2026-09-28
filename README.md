# Santa Ana en Estampas — sitio web

Sitio estático (HTML + CSS + un poco de JavaScript), listo para publicar en Vercel. No necesita compilación ni dependencias.

## Estructura

Todos los archivos van sueltos en la raíz del repositorio (sin carpetas):

```
index.html            Portada
nota.html             Nota (se abre como /nota)
styles.css            Estilos (escritorio, tablet y móvil)
main.js               Menú móvil y fecha del día
logo.png, camara.png  Logo y cámara del logo
favicon.png, apple-touch-icon.png
vercel.json           URLs limpias
```

## Publicar en Vercel

**Opción A — con GitHub (recomendada)**
1. Crea un repositorio en GitHub y sube el contenido de esta carpeta (los archivos, no la carpeta contenedora).
2. En Vercel: *Add New → Project* e importa el repositorio.
3. Framework Preset: **Other**. Build Command: vacío. Output Directory: vacío (raíz).
4. *Deploy*. Cada cambio que subas a GitHub se publica solo.

**Opción B — desde la terminal**
```
npm i -g vercel
cd santa-ana-web
vercel          # vista previa
vercel --prod   # publicación final
```

## Cambiar las fotos

Cada foto es un recuadro gris con la descripción de lo que va ahí, por ejemplo:

```html
<div class="media">Foto: centro histórico</div>
```

Sube la foto junto a los demás archivos y reemplaza el texto por la imagen:

```html
<div class="media"><img src="foto-centro-historico.jpg" alt="Calle del centro histórico de Santa Ana"></div>
```

La foto se recorta sola al tamaño del recuadro en todas las pantallas. Recomendado: JPG o WebP de 1600 px de ancho como máximo para la foto principal y 800 px para las demás.

## Publicidad

Los espacios están marcados con la clase `ad` y su medida:

| Clase | Escritorio | Tablet | Móvil |
|---|---|---|---|
| `ad-top` | 990 × 57 | 990 × 57 (se ajusta) | 320 × 100 |
| `ad-billboard` | 970 × 250 | 728 × 90 | 320 × 100 |
| `ad-leader` | 970 × 90 | 728 × 90 | 320 × 100 |
| `ad-rect` | 300 × 250 | 300 × 250 | 300 × 250 |
| `ad-sky` | 300 × 600 | oculto | oculto |

Para usar Google AdSense u otro servidor de anuncios, pega el código del anuncio dentro del `<div class="ad ...">` correspondiente.

## Colores de marca

Definidos al inicio de `css/styles.css`:

- Rojo del logo `#F42600` — filetes, números, esquinas de visor
- Rojo para texto y botones `#C4200B`
- Rojo de iconos sociales `#D9230A`
- Verde oliva del logo `#919200` / `#B8BA2A` — solo para Estampas
- Tinta `#121212`, fondo de Estampas `#16130F`

Tipografías (Google Fonts): **Newsreader** para titulares y texto, **Libre Franklin** para menús y datos.

## Pendiente

- Formularios del boletín: conectarlos al servicio de correo que uses (Mailchimp, Brevo, etc.).
- Enlaces marcados con `#`: apuntarlos a las secciones reales.
- Los textos de las notas son de ejemplo.
