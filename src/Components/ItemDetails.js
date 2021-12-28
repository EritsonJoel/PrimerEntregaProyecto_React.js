import React from 'react'
import { useParams } from 'react-router-dom';
import {  getFetch } from './ItemListContainer';
import '../App.css'
import { useState, useEffect } from 'react';


import { collection, doc, getDocs} from 'firebase/firestore';
import db from '../Firebase/fireBase'
import { async } from '@firebase/util';


function ItemDetails() {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const {idproducto} = useParams();

    //useEffect(() => {
      //  getFetch
        //  .then((res) => setInfo(res.find((e) => e.id === parseInt(idproducto))))
          //.finally(() => setLoading(false));
      //}, [idproducto]);


      console.log(info);
      console.log('id', idproducto);


      useEffect(() =>{
  
        const obtenerD = async() =>{
        const datos =   await getDocs(collection( db, 'productos' )); 
          const pi = datos.find((e) => e.id === parseInt(idproducto))
       
        console.log(pi)

       if(datos.exists()){
         
       }
          setInfo(datos.docs.map((doc) => ({id: doc.id, ...doc.data()})));
          console.log(doc)
        
        
        }
       obtenerD()
        
      }, [idproducto]);
     //  const dbQuery = getFirestore();

       //dbQuery.collection('productos').where('categoria', '==', idproducto).get() // traer todo
       //.then(data => setInfo(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
       //.catch(err=> console.log(err))
       //.finally(()=> setLoading(false))    





   


    return (
        <section className='ItemDetail'>
            <div  >{loading ? <h2>Cargando..</h2> :


             <h1>{info.nombre}</h1>}
              < img src={info.imageID} alt="fto" className='imagenes'/>
              <h2>${info.precio}</h2>
              <h2>{info.categoria}</h2>
             </div>
             <button>AGREGAR A CARRITO</button>
        </section>
    )   
}

export default ItemDetails
