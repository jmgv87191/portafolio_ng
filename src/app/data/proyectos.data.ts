import { Proyectos } from '../interfaces/proyecto'



export const proyectos: Proyectos[] = [
    {
        id:1,
        title: "Ejemplo Facturas",
        img: '../../../assets/pc.jpg',
        text_title: "Proyecto de facturas en Angular",
        text: `Para el desarrollo de esta app de ejemplo de facturación, tomé en cuenta únicamente la parte del frontend. El backend lo simulé con un archivo data.ts, y los servicios consultan y modifican este archivo para poder mostrar los elementos en pantalla, eliminarlos temporalmente, agregar nuevos elementos y mostrar el monto total de la factura.
Para el diseño, usé Bootswatch (una colección de temas gratuitos para Bootstrap). Se crearon distintas interfaces para definir la estructura de los datos y así garantizar su consistencia. También utilicé los decoradores @Input() y @Output() con EventEmitter para pasar datos desde un componente padre a un hijo y viceversa.

Para las validaciones de los inputs, se usó la directiva @if, que verifica si el campo es inválido cuando el usuario lo modifica o lo toca. A pesar de ser un proyecto sencillo, me gustó mucho el diseño. Nunca había usado Bootswatch, y me sorprendió la facilidad para implementarlo. Hay algunas herramientas que me parecieron útiles y que probablemente siga usando en proyectos futuros.

Es un proyecto muy ilustrativo para los elementos que se usaron en él. En general, creo que lo más destacado fue el uso y comprensión de los decoradores @Input() y @Output().`,
        tools: [
            "Angular 18 ","TypeScript","BootsWatch", "Interfaces en TypeScript", "Input() y @Output() con EventEmitter "
            ,"Directiva @if (Angular 18)", "Formularios Reactivos "
        ] 
    },
    {
        id:2,
        title: 'Carrito de compras',
        img: '../../../assets/carrito-de-compras.png',
        text_title: 'Hecho en Angular',
        text:`Esta aplicación la hice para reforzar el conocimiento adquirido con la app de ejemplo de facturación. Es similar, pero un poco más compleja. La base de datos, nuevamente, está simulada en un archivo data.ts.
            Para el maquetado, usé Bootswatch, pero esta vez con un poco de Bootstrap puro. Este proyecto, al igual que el anterior, está dividido en subcomponentes para facilitar la revisión en caso de que exista algún error. La comunicación entre estos componentes se realiza mediante los decoradores @Input() y @Output() con EventEmitter.

            A través de los servicios, se leen los productos que se van a mostrar en pantalla para agregarlos al carrito de compras. Además de leer los productos, también se pueden eliminar o agregar más de uno, modificando la cantidad en lugar de añadir otro producto por separado. También se muestra el total del carrito de compras.

            A pesar de ser un proyecto muy similar al de facturación, hay algunos cambios que marcan una gran diferencia. Para modificar la cantidad de productos, en lugar de agregar uno nuevo, utilicé el método .find() para verificar si el id del producto ya estaba en el carrito. Si el producto ya existía, usé el método .map() para modificar la cantidad.

            A mi parecer, esta fue la parte más interesante del proyecto, ya que el método .map() es muy utilizado y es de suma importancia saber emplearlo correctamente.`,
        tools: [
            "Angular 18","TypeScript","Bootstrap","Métodos .find() y .map() ",
            

        ] 
    },
    {
        id:3,
        title: 'UserApp',
        img: '../../../assets/carrito-de-compras.png',
        text_title: 'Interfaz de Usuarios',
        text:`Este proyecto está dividido en componentes que se comunican mediante @Input() y @Output(), y está maquetado con Bootstrap. Creé una interfaz de usuarios para asegurar la consistencia de los datos.

Para la administración de usuarios, utilicé las operaciones CRUD (Create, Read, Update, Delete), todo esto controlado mediante el uso de servicios. Para las pantallas pop-up de confirmación y alertas, se usó SweetAlert2, y para las validaciones del formulario, la directiva de control de flujo @if.

Las validaciones aseguran que los inputs no estén vacíos si ya fueron seleccionados, que tengan un mínimo de caracteres y que el botón de enviar solo esté habilitado cuando el formulario sea válido.

El botón de actualizar muestra en un formulario la información del usuario. Este formulario incluye un botón para limpiar los campos y así ingresar datos completamente nuevos, o bien, la opción de modificar la información existente.

A mi parecer, esta es la parte más importante del proyecto.`,
        tools: [
            "Angular 18","TypeScript","Bootstrap","SweetAlert2",
            "@Input() y @Output() con EventEmitter","Operaciones CRUD",
            "Validaciones de formularios"


        ] 
    },
    {
        id:4,
        title: 'AppPaises',
        img: '../../../assets/carrito-de-compras.png',
        text_title: 'Aplicacion para ver datos de paises',
        text:`Esta app permite filtrar información por capital, país o región, consumiendo la API de REST Countries mediante un input de búsqueda. La información se muestra en tiempo real mientras se teclea el parámetro de búsqueda. En pantalla, se despliega un listado con la información básica y un botón de "Info" para ver detalles más específicos.

La maquetación se realizó exclusivamente con Bootstrap. Para asegurar la preservación de los datos, utilicé localStorage. Además, implementé un sistema de ruteo sencillo sin rutas predeterminadas para acceder a las distintas secciones del proyecto.

Las búsquedas se realizan mediante peticiones HTTP con HttpClient, y los valores obtenidos se emiten mediante un Observable, al cual me suscribí en el módulo donde necesitaba manipular los datos a mi conveniencia.

En mi opinión, la parte más importante de este proyecto es el consumo de APIs reales y la manipulación de la información para mostrarla en pantalla.`,
        tools: [
            "Angular 18","Bootstrap","HttpClient","Observables",
            "LocalStorage","Angular Router","Event Binding y ngModel"


        ] 
    },
    {
        id:5,
        title: 'Punto de Venta',
        img: '../../../assets/carrito-de-compras.png',
        text_title: 'Aplicacion para administrar un punto de venta',
        text:`Para la app de punto de venta, desarrollé tanto el backend como el frontend.

Para el backend, utilicé Node.js, Express, Sequelize, CORS y Dotenv, y lo desplegué en Render. Lo escribí en TypeScript, compilándolo a JavaScript mediante el comando tsc --watch. Para reflejar los cambios en tiempo real, usé Nodemon en la carpeta dist.

Primero, creé el archivo index.ts, donde importé server.ts, que es donde utilizo todos los elementos necesarios. El primer paso fue usar la función listen() para que el servidor escuche las solicitudes entrantes en un puerto específico.

Luego, configuré el sistema de rutas, comenzando por la ruta "/", que es la principal al abrir la página. Después, implementé un middleware para manejar las rutas relacionadas con productos, permitiendo realizar peticiones GET, POST, PUT y DELETE.

También desarrollé los controladores, encargados de gestionar estas solicitudes, y establecí la conexión a la base de datos en MySQL con Sequelize. Una vez terminado el backend, lo monté en Render.com.

Para el frontend, utilicé Angular 18, Bootstrap y Bootswatch. Creé un sistema de rutas y las interfaces necesarias. En el archivo product.service.ts, implementé todas las funciones que manipulan las peticiones CRUD, las cuales se utilizan en los distintos módulos mediante inyección de dependencias.

El formulario cuenta con las validaciones necesarias para asegurar la correcta entrada de datos.

En conclusión, es un proyecto muy completo que aún puede mejorar, pero que sirve como una excelente ilustración de cómo desarrollar un proyecto Full Stack.`,
        tools: [
            "Angular 18","Bootstrap", "Angular Router", "Inyección de dependencias",
            "Node.js","Express.js","Sequelize", "MySQL","CORS",
            "Dotenv","Nodemon"


        ] 
    },
]