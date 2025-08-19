# Informe de QA (MVP Iberia) — v0.1

Este archivo describe los resultados de pruebas de rendimiento y funcionalidad. Será actualizado a medida que se realicen mediciones en la Fase 1.

## KPI y métricas evaluadas

- **LCP** (Largest Contentful Paint) en la página de mapa.
- **Tiempo de respuesta** de cálculo de rutas (modos ligera y a caballo).
- **FPS promedio** al interactuar con el mapa y cambiar de año.
- **Accesibilidad**: contraste, navegación por teclado y labels descriptivos.

## Resultados preliminares

*Pendiente.* Las pruebas automatizadas se implementarán con **Lighthouse CI** y **k6/Artillery**. Este informe se actualizará cuando se obtengan los primeros resultados.

## Próximos pasos

1. Configurar workflows de CI para ejecutar Lighthouse y generar informes de rendimiento.
2. Añadir scripts de carga para medir tiempos de ruta en la API.
3. Registrar los percentiles **P50** y **P95** de cada métrica y documentar cualquier desviación.
