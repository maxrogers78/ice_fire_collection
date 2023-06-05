# Ice&FireCollection

## Ejecución de la aplicación

Debe tener instalado Node.js en su equipo

1. Dentro de la ruta base del proyecto, ejecutar `npm install`
2. Luego ejecutar `npm run dev`
3. Por defecto se iniciará en `http://localhost:3009`
4. Para iniciar Storybook ejecutar `npm run storybook`, por defecto iniciará en `http://localhost:6006`

## Entorno de testing

1. Dentro de la ruta base del proyecto, ejecutar `npm run test`

## Tecnologías requeridas

- React (vite)
- Typescript
- react-router-dom
- Headless UI
- TailwindCSS
- react-table
- Formik
- Jest (con vitest)
- Storybook
- Context API (propia de React)

## Tecnologías no requeridas

- moment.js: Librería para el manejo simple de fechas y horas
- framer-motion: Librería simple de animaciones
- react-icons: Librería de íconos
- axios: Librería para realizar peticiones http (alternativa a la API Fetch propia de React)

## Sección de preguntas

- ¿Cómo decidiste las opciones técnicas y arquitectónicas utilizadas como parte de su solución?
  - Me base lo más que pude en el patrón SOLID orientado programación orientada a objetos, aunque esta aplicación no tenga ese paradigma pude seguir sus bases para lograr un orden y ecosistema estable, escalable y legible para que cualquier desarrollador que llegue a tomar este proyecto pueda entender sin problemas el funcionamiento y lógica de cada componente.
- ¿Hay alguna mejora que dejaste pendiente de hacer en su envío?
  - Sí, los testing. Lamentablemente ocurrió una emergencia este fin de semana que me dejó sin disponibilidad para poder avanzar en el proceso de testing de la aplicación, por lo cual quedó incompleta
- ¿Qué harías de manera diferente si se le asignara más tiempo?
  - Completar el apartado de testing de la aplicación
  - Tendría una mejor planificación de diseño ya que utilicé estilos básicos, simples y agradables a la vista, pero siento que puedo mejorar tanto el diseño como la interactividad.
  - También hubiese dedicado más tiempo a leer la documentación de tecnologías que no había utilizado previamente (Jest y Storybook), a pesar que pude aprender la base rápidamente me hubiese gustado indagar aún más para entender las buenas prácticas y la mayor cantidad de funcionalidades posible que cada tecnología ofrece.
