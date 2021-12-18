import React from 'react'
import { useParams } from 'react-router-dom';
import {  getFetch } from './ItemListContainer';

import { useState, useEffect } from 'react';

function ItemDetails() {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const {idproducto} = useParams();

    useEffect(() => {
        getFetch
          .then((res) => setInfo(res.find((e) => e.id === parseInt(idproducto))))
          .finally(() => setLoading(false));
      }, [idproducto]);


      console.log(info);
      console.log('id', idproducto);

    return (
        <div>
            <div  >{loading ? <h2>Cargando..</h2> :



             <h1>{info.name}</h1>}
              < img src={info.foto} alt="fto" className='imagenes'/>
              <h2>${info.precio}</h2>
             </div>;
        </div>
    )
}

export default ItemDetails
