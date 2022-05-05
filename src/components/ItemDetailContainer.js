// import { useEffect, useState } from "react"
// import ItemDetail from "./ItemDetail"

// const productosProbando = [
//     {
//         id:4,
//         nombre: "Producto 4",
//         precio: 400
//     },
//     {
//         id:5,
//         nombre: "Producto 5",
//         precio: 500
//     },
//     {

//         id:6,
//         nombre: "Producto 6",
//         precio: 600
//     }
// ]

// const ItemDetailContainer = () => {
//     const [productos,setProductos] = useState([])

//     useEffect(()=>{
//         const promesa = new Promise ((res)=>{    
//             setTimeout(() =>{
//             res(productosProbando)
//     },2000)
            
//     }
//     )
    
//     .then((contenido)=>{
//         setProductos(contenido)
//     }
//     )
//     .catch((error)=>{
//         console.log("Salio todo mal")
//     })
    
//     },[])  
//     return(
//         <>
//     <p>Cargando..... </p>
//     <ul>   
//     <ItemDetail producto={productos}></ItemDetail>
//     </ul>
    
//     </>
//     )
// }
// export default ItemDetailContainer