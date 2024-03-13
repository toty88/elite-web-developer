# Clase 02

## ¿Por qué webpack?

Webpack es un module bundler. Lo que hace es tomar módulos con dependencias y los empaqueta en uno o varios archivos. Esto surge de la necesidad de las web complejas de combinar diferentes recursos como CSS, JS, imagenes, etc en un solo archivo.

Al agrupar módulos, webpack reduce el número de peticiones realizadas al servidor y dsiminuye el tráfico de red.

Además, minifica y comprime el código.

Webpack al igual que los modules bundlers modernos (como rollup) permiten hacer:

- Code splitting: Permite dividir el código en múltiples paquetes (chunks) que se pueden cargar bajo demanda
- HMR (Hot module refresh): Permite hacer cambios en módulos sin necesidad de recargar la página
- Three Shaking: Elimina el código no utilizado del bundle final (reduce el tamaño del archivo y mejora el rendimiento)

```
npm i -g typescript
npm init -y
tsc --init
```

### Loaders

Por default, webpack solo entiende Javascript y trata cada archivo importado como módulo. Webpack no puede bundlear archivos que no son JS, por eso es que usamos loaders. Esto le va a decir a webpack como bundlear archivos estáticos. Algunos loaders incluyen: ts-loader, css-loader, style-loader, etc.

```bash
yarn add -D webpack webpack-cli ts-loader webpack-dev-server html-webpack-plugin
yarn add typescript
```

ts-loader: Su función principal es permitir a Webpack compilar y cargar archivos TypeScript en tu aplicación.

En la raíz creamos el archivo

> webpack.config.js

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "our project",
      template: "index.html",
    }),
  ],

  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
```

> Creamos la pagina index.html en el root folder

> Vemos que webpack agregará el script bundle.js en el index.html gracias a nuestra config

Este atributo le indica al browser que no espere al script para seguir con el flujo. Vamos a procesar el HTML, construir el DOM y el script cargará en segundo plano. Los scripts cargados con defer no son bloqueantes y se ejecutan siempre que el DOM esté listo.

<hr />

### Generics

```typescript
type MaybeId = string | number | undefined;
// Interfaz genérica para representar un recurso
interface Resource<T> {
  id: MaybeId;
  data: T;
}

interface User {
  name: string;
  age: number;
}

const userResource: Resource<User> = {
  id: "123",
  data: {
    name: "John",
    age: 30,
  },
};

console.log(userResource); // Imprime: { id: '123', data: { name: 'John', age: 30 } }

function waitFor<T>(valor: T, tiempo: number): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(valor);
    }, tiempo);
  });
}

waitFor<string>("Hola", 1000).then((resultado) => {
  console.log(resultado); // Imprime: Hola después de 1 segundo
});

// Esto aceptaría numer, bigint, etc
function validateNumericRange<T extends number>(
  valor: T,
  min: T,
  max: T
): boolean {
  return valor >= min && valor <= max;
}
```

### Petición con axios

```typescript
export const getResource = async <T>(url: string): Promise<T[]> => {
  const response = await axios.get<T[]>(url);
  return response.data;
};

interface InfoProps {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

interface ResultProps {
  id: string;
  name: string;
  status: string;
  // .... more props
}

interface SomeAPIInterface {
  info: InfoProps;
  results: ResultProps[];
}

getResource<SomeAPIInterface>("https://rickandmortyapi.com/api/character");
```
