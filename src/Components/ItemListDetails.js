import React from 'react'
import { useState,  useEffect } from 'react';
import { useParams, BrowserRouter,Route} from 'react-router-dom';
import { getFetch } from './ItemListContainer';


function ItemListDetails() {

    const [ producto , setProducto] = useState({})
 
  


     
    function BlogPost() {
        const {idcategoria} = useParams() ;

        getFetch
        .then(data =>{
            setProducto(data.find(prod => prod.id === idcategoria ))
        })
        return <div style={{ fontSize: "50px" }}>
                 {producto.name}
                 Now showing post {idcategoria}
               </div>;
      }


        
    return (

           <div>
     
      
         <BlogPost/>
              </div>
        
    )
}

export default ItemListDetails
