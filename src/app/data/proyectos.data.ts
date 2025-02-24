import { Proyectos } from '../interfaces/proyecto'



export const proyectos: Proyectos[] = [
    {
        id:1,
        title: "Ejemplo Facturas",
        img: '../../../assets/pc.jpg',
        text_title: "Proyecto de facturas en Angular",
        text: "asdasdasdasdasd",
        tools: "Angular, Api,"
    },
    {
        id:2,
        title: 'Carrito de compras',
        img: '../../../assets/carrito-de-compras.png',
        text_title: 'Hecho en Angular',
        text:`Esta hecho en angular sin utilizar una base de datos, toda la informacion se consulta
        de una base simulada en typescript y se utiliza session storage para guardar los cambios realizados`,
        tools: "Angular, Api,"
    },
]