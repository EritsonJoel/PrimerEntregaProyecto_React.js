import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/itemList/ItemList'
import { getFirestore } from '../../firebase'
import MainImgCategories from './MainImgCategories'
import Spinner from '../../components/spinner/Spinner'

const ItemListContainer = () => {
    const [list, setList] = useState([])
    const { categoryId } = useParams()  //obtnego el id por categoteria  
    useEffect(() => {
        const db = getFirestore()  //lamo a la base de datos

        let docRef  //creo variable

        if (categoryId) {
            docRef = db //igualo la variable con la base de datos
                .collection('items') //llamo la coleccion de productos
                .where('categoryId', '==', categoryId) //la codiciono , mientras idCategeria de Items , sea igua a la del parametro , me  mostarn los productos 
        } else { //sino
            docRef = db.collection('items')//mostrara todos los productos
        } 

        docRef.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No existen resultados')
            }
            setList(
                querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
        })
    }, [categoryId])
    return (
        <>
            <MainImgCategories imgCategory={categoryId} />
            {list.length > 0 ? <ItemList list={list} /> : <Spinner />}
        </>
    )
}

export default ItemListContainer
