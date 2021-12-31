import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import ItemDetail from '../../components/itemDetail/ItemDetail'
import { getFirestore } from '../../firebase'
import Spinner from '../../components/spinner/Spinner'

//listado de productos cuando que se trae desde una promesa:

// const itemDetails = (productId) => {
//     return new Promise(result =>  setTimeout(() =>
//         { result(listProducts.find(product =>
//             product.id===parseInt(productId)))
//         },3000))
// }

//listado de los productos traidos de firebase:
const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)

    const [item, setItem] = useState([])
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()  // llamo la funcion  que tiene la base de datos firebase y lo guardo en la variable bb
        const docRef = db.collection('items').doc(productId) //obtengola base la colecciom  de la base de datos pero con su Id especifico
         //para hhaci filtrar la informacion , ose los productos.

        docRef.get().then((querySnapshot) => {  
            setLoading(false)
            setItem({ id: querySnapshot.id, ...querySnapshot.data() })
        })
    }, [productId])

    return (
        <Box minHeight="87vh">
            {loading === true ? <Spinner /> : <ItemDetail item={item} />}
        </Box>
    )
}

export default ItemDetailContainer
