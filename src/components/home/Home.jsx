import React from 'react'
import ItemListContainer from '../../containers/itemListContainer/ItemListContainer'
import ImgMain from '../main/ImgMain'

//componente del Inico  //
//en este componete llamo a la imgane de fondo, que es  el componente  <ImgMain />
// y tambien <ItemListContainer /> que es el componente donde obtengo la lista de productos
const Home = () => {
    return (
        <>
            <ImgMain />
            <ItemListContainer />
        </>
    )
}
export default Home
