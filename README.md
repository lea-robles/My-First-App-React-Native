# My First App React Native

## Descripción
Hola soy Leandro Robles y realice este proyecto para mi curso de Desarrollo de Aplicaciones. Es una aplicación desarrollada con React Native y Expo que permite a los usuarios registrarse y a partir del ingreso navegar por diferentes categorías de productos y agregarlos a un carrito de compras. La aplicación también cuenta con una pantalla de perfil, otra de ordenes de compra y una que muestra la ubicación actual del usuario. 

## Librerías utilizadas

+ **React Native:** framework para el desarrollo de aplicaciones móviles en JavaScript y JSX.

- **Expo:** plataforma que permite crear y ejecutar aplicaciones React Native.

+ **Firebase:** para la creación de aplicaciones web y móviles con funciones backend como autenticación, base de datos y storage entre otras.

- **React Navigation:** para la navegación entre pantallas en aplicaciones React Native.

+ **Redux:** es una librería que ayuda a gestionar el estado global de una aplicación de JavaScript, usualmente con React. Los elementos principales de Redux incluyen:
-*Store*: Almacena el estado de toda la aplicación.
-*Actions:* Describen lo que sucedió.
-*Reducers:* Deciden cómo cambia el estado.

- **React-native-toast-message:** es un componente de mensajes tipo toast para React Native, es liviana y personalizable.

+ **Yup:** es un constructor de esquemas para el análisis y validación de valores en tiempo de ejecución. Lo utilice para validar emails y contraseñas.

- **Expo-location:** para obtener la ubicacion, la utilice para obtener la del usuario y mostrarla en un mapa.

+ **Expo-image-picker:** para seleccionar imágenes y videos desde la galería de tu dispositivo o tomar una foto con la cámara. Lo utilizo para la foto de perfil.

- **Expo-sqlite:** para base de datos que necesito que persistan al reinciar la app.

---

## Instalación

Para instalar la aplicación, sigue los siguientes pasos:

 1. Debemos instalar [Node.js](https://nodejs.org/) (Se recomienda utilizar la versión LTS v18.15.0 en adelante)
 
<br>

2. Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/lea-robles/My-First-App-React-Native.git
```
<br>

3. Navega al directorio de la aplicación:
```bash
cd My-First-App-React-Native
```
<br>

4. Instala las dependencias:
```bash
npm install
```
<br>

&nbsp;&nbsp;&nbsp; O si usas yarn:

```bash
yarn install
```
<br>

5. Luego inicia la aplicación con:
```bash
npx expo start
```
<br>

6. Ahora escanea el codigo QR con la aplicación Expo en tu dispositivo móvil o emula la aplicación en tu simulador de dispositivo móvil.

---
##Configuración
La aplicación requiere la instalación de la aplicación Expo en tu dispositivo móvil o el emulador de dispositivo móvil. Además, requiere los siguientes permisos:

+ Ubicación (para obtener la ubicación del usuario)
+ Cámara (para tomar fotografías)

Asegúrate de tener estos permisos configurados en tu dispositivo o emulador para que la aplicación funcione correctamente.

---

## Aspectos a incluir

+ Tengo que agregar metodos de pagos.
+ La funcion de poder eliminar ordenes de compra y ver sus detalles. Tambien debo hacer que solo muestre las ordenes correspondientes a cada usuario.
+ Agregar ubicación de la tienda en el mapa y otras funciones.
+ La opcion para rellenar los datos de usuario.
+ Agregar mas productos y mejores imagenes.

---

### Por bugs o recomendaciones

Comunicarse a learobles75@gmail.com.

