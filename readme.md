# API de Gatitos y Perritos

Esta API permite acceder a información sobre gatos y perros a través de rutas específicas. Está construida utilizando Express.js y devuelve datos en formato HTML.

## Rutas Disponibles

### 1. Página Principal

- **Ruta**: `/`
- **Método**: `GET`
- **Descripción**: Muestra un mensaje de bienvenida con información sobre la API y las rutas disponibles.

### 2. Página de Gatitos

- **Ruta**: `/gatitos`
- **Método**: `GET`
- **Descripción**: Devuelve una lista de gatos con su nombre, raza y edad. Cada gato se presenta en un formato HTML centrado.

### 3. Página de Perritos

- **Ruta**: `/perritos`
- **Método**: `GET`
- **Descripción**: Devuelve una lista de perros con su nombre, raza y edad. Al igual que en la ruta de gatitos, los datos se presentan en un formato HTML centrado.

### 4. Página 404

- **Ruta**: `*`
- **Método**: `GET`
- **Descripción**: Respuesta para rutas no definidas, indicando que la página no existe.

## Estructura de Datos

### Gatitos

Por ejemplo los datos de los gatos se cargan desde un archivo `gatitos.json`, que contiene un array de objetos con la siguiente estructura:

```json
[
    {
        "nombre": "Nombre del gato",
        "raza": "Raza del gato",
        "edad": "Edad del gato"
    }
]

