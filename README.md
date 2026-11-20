# QuestLog

Biblioteca personal de videojuegos hecha con Expo, React Native y TypeScript.

La app es **local y derivada**: no hay backend, ni API, ni persistencia. Los juegos, las horas y las reseñas viven en memoria y se reinician al recargar la página. Las estadísticas se calculan siempre desde ese estado.

## Ejecutar

```bash
cd mobile
npm install
npm run web
```

## Verificar y exportar

```bash
cd mobile
npx tsc --noEmit
npm run build:web
```

El export estático sale en `mobile/dist` y se despliega en Vercel desde la configuración `vercel.json` de la raíz.

## Estructura

```text
mobile/src/
├─ app/        Rutas y layouts (Expo Router)
├─ components/ Componentes compartidos
├─ constants/  Paleta de colores
├─ features/   Lógica por dominio: home, library, search, log, profile, social
└─ lib/        Utilidades puras
```

## Alcance

- Inicio con juegos populares y próximos lanzamientos.
- Búsqueda con filtros y límite de texto.
- Mi Log organizado por estados.
- Perfil con estadísticas derivadas.
- Social de ejemplo: actividad, reseñas, amigos y recomendaciones.

No están previstos chat, notificaciones push ni feed infinito.
