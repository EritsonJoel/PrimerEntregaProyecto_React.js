import React from 'react'
import { useState,  useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';





 //PROMESAS Y ASINCRONIA
 const productos = [


    {id: 1, foto:'https://home.ripley.com.pe/Attachment/WOP_5/2025250665203/2025250665203_2.jpg',name:'Puma1', precio: 200 ,categoria: 'Zapatillas'},
    {id: 2, foto:'https://home.ripley.com.pe/Attachment/WOP_5/2025250665203/2025250665203_2.jpg' ,name:'Puma2',precio: 200,categoria: 'Zapatillas'},
    {id: 3, foto:'https://ae01.alicdn.com/kf/HTB1ad6NMXYqK1RjSZLeq6zXppXa7.jpg',name:'Gorro1' ,precio: 200,categoria: 'Gorros'},
    {id: 4, foto:'https://m.media-amazon.com/images/I/71CgbV5OcOL._AC_UL1500_.jpg' ,name:'Gorro2',precio: 200,categoria: 'Gorros'},
    {id: 5, foto:'https://http2.mlstatic.com/D_NQ_NP_965530-MPE44439916580_122020-V.jpg',name:'Polo bab bunny1',precio: 200,categoria: 'Polos'},
    {id: 5, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhegMiJ1BER-VxsxdOJC-VM6PqnNXUaSoWw&usqp=CAU',name:'Polo bab bunny2',precio: 200,categoria: 'Polos'},
  ]

//collbak: es una funcion pasada por parametro
export  const  getFetch = new Promise((aceptado, rechazado )=>{  //instaciamos un objeto y le pasamos una collbak y recibe dos parametros que voy a nombre
    //aparte de ser dos parametros , tambien seran una funcion
  
  
    setTimeout(() =>{
      aceptado(productos)
    }, 3000)
  })



function ItemListContainer() {

    const [ producto , setProducto] = useState([])
    const [ cargando, paraCargando] = useState(true) 

    const {idcategoria} = useParams()  //capturo como le asigne el nombre al parametro , para asi capturar
    // la categoria

  


  useEffect(() => {


    
    if (idcategoria) {

        getFetch
        .then(data =>{
          //lamo a la appi
          setProducto(data.filter(pro => pro.categoria === idcategoria))
      
        })
        .catch(e => console.log(console.error))
        .finally(() => paraCargando(false))
         
    } else {
        getFetch
  .then(data =>{
    //lamo a la appi
    setProducto(data)

  })
  .catch(e => console.log(console.error))
  .finally(() => paraCargando(false))
 
    }
    


    return () => {
      console.log('clear');
    }
  },[idcategoria])
 

    return (
        <div className="App">
            {   cargando ?  <h1>CARGANDO...</h1> :  producto.map( pro => <div key={pro.id} className="card w-50 mt-5">


            <div className="card-header">
       { pro.nombre}
       {pro.categoria}
     </div>
     <div className="card-body">
       < img src={pro.foto} alt="fto" className='imagenes'/>
       {pro.precio}
       
     </div>
    <div  className="card-footer">
      <Link to={`/detalleproducto/${pro.id}`}>
      <button className="btn btn-outline-primary btn-block">
        DETALLE PRODUCTO
      </button>
      </Link>
    </div>     
                
            </div>
                )}

            
        </div>
    )
}

export default ItemListContainer
