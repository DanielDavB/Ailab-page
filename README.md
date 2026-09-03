# AiLab — Sitio web + Portal de clientes

Sitio estático (sin build step) para **ailabschool.com**: la marketing website es la
puerta principal y el **portal de clientes** vive aparte, detrás de un login, en `/portal`.

Todo corre directo desde HTML: React y Babel se cargan por CDN, y JSX se compila en el
navegador. No hace falta `npm install` ni bundler para verlo funcionando.

## Cómo verlo

**Opción rápida:** doble clic en `index.html`. Funciona por `file://`.

**Recomendado** (mejor rendimiento, evita restricciones de algunos navegadores con `file://`):
```bash
npx serve .
# o
python -m http.server 8080
```
y abre `http://localhost:8080`.

## Estructura

```
ailab-website/
├── index.html              ← Home del sitio (punto de entrada principal)
├── data.js                 ← Contenido del sitio: servicios, casos, equipo, cursos, stats
├── assets/
│   ├── ds/                 ← Design system (tokens + componentes compilados)
│   │   ├── styles.css      ← Entry point de estilos (importa tokens/)
│   │   ├── tokens/         ← colors, typography, spacing, shape, motion, fonts, base
│   │   └── ds-bundle.js    ← Button, Card, Badge, Input, Dialog, Toast, Tabs, etc.
│   └── js/                 ← Pantallas del sitio público (JSX, se compilan en el navegador)
│       ├── Motion.jsx      ← Animaciones (reveal, marquee, contador, fondo de red)
│       ├── Chrome.jsx      ← Header, Footer, Section, SectionHead
│       ├── HomeScreen.jsx
│       ├── ServicesScreen.jsx
│       ├── CasesScreen.jsx    ← incluye el detalle de caso
│       ├── InnerScreens.jsx   ← Metodología, Academia, Equipo, Aviso de privacidad
│       └── ContactScreen.jsx
└── portal/                 ← Portal de clientes — separado, requiere "login"
    ├── index.html          ← Login → Dashboard → resto de pantallas del portal
    ├── data.js              ← Datos mock de cliente/proyectos
    └── js/
        ├── PortalChrome.jsx
        ├── LoginScreen.jsx
        ├── DashboardScreen.jsx  ← incluye el detalle de proyecto
        └── PortalScreens.jsx    ← Entregables, Actividad, Soporte, Cuenta
```

## Cómo se conectan sitio y portal

- El botón **"Iniciar sesión"** del header y el enlace **"Portal de clientes"** del footer
  navegan a `portal/index.html` (una app aparte, no una ruta interna del sitio).
- `portal/index.html` muestra primero `LoginScreen`. Al enviar el formulario, la sesión se
  guarda en `sessionStorage` (`ailab_portal_session`) y se entra al `DashboardScreen`.
  Esto es **autenticación simulada para el prototipo** — no hay backend. Antes de manejar
  datos reales de clientes, sustituir esa lógica por un proveedor real (p. ej. Supabase Auth).
- Desde el portal, el enlace "¿Aún no eres cliente?" regresa a `../index.html` (la home
  del sitio).
- El sitio usa rutas por hash (`#servicios`, `#casos`, `#contacto`, …) para que una página
  se pueda recargar o compartir sin perder la pantalla activa.

## Editar contenido

- **Copy del sitio** (servicios, casos, equipo, cursos, stats): `data.js`.
- **Datos del portal** (cliente, proyectos, entregables, actividad): `portal/data.js`.
- **Colores, tipografía, espaciados**: `assets/ds/tokens/*.css`.
- **Componentes base** (Button, Card, Input, Dialog…): regenerados desde
  `assets/ds/ds-bundle.js`. Si necesitas tocar uno a mano, edítalo ahí — es JS plano,
  ya sin JSX (fue compilado desde el design system de origen).

## Pendientes conocidos (heredados del design system)

- **Iconos**: `Icon` (dentro de `ds-bundle.js`) trae los SVG de Lucide vía CDN
  (`unpkg.com/lucide-static`) en tiempo de ejecución — requiere internet. Para un sitio
  100% offline, vendorizar los SVG usados en `assets/icons/` y apuntar `Icon` ahí.
  Íconos usados: `workflow, bot, plug, clock, gauge, trending-up, search-check,
  graduation-cap, file-text, shield-check, check, arrow-right, arrow-up-right,
  arrow-left, arrow-down-to-line, chevron-down, zap, lock, mail, mail-check,
  message-circle, calendar, circle-check, triangle-alert, circle-x, info, x, plus`.
- **Tipografías**: Syne / Outfit / Space Mono cargan de Google Fonts
  (`assets/ds/tokens/fonts.css`). Si llegan archivos con licencia, cambiar el `@import`
  por `@font-face` locales.
- **Logo**: no hay archivo de logo; el wordmark "Ai**Lab**" está tipografiado (Syne 800).
- **Formularios** (contacto, agendar diagnóstico, ticket de soporte, cuenta): no envían a
  ningún backend todavía — solo actualizan estado local y muestran un `Toast`. Conectar a
  donde corresponda (correo, CRM, base de datos) antes de producción.
