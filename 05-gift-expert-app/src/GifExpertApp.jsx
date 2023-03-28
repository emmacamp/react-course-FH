import { useState } from "react";
import { AddCategories, GiftGrid } from "./components";
// import homeSVG from './assets/aroundTheWorld.svg'

const GifExpertApp = () => {
  const [category, setCategory] = useState([]);

  const onAddCategory = (newCategory) => {
    if (category.includes(newCategory)) return;
    setCategory([newCategory, ...category])
  }

  return (
    <div className="container vh-75 justify-content-center  align-items-center">
      <div className="header p-2 justify-content-between  align-items-center">
        <h1 className="p-0 m-0">GifExpertApp</h1>
        <AddCategories addCategories={onAddCategory} stateCategories={category} />
      </div>
      <div className="container mw-100 d-flex justify-content-center  align-items-center">
        {
          category.length === 0
            ?
            <div className="d-flex flex-column w-50 h-25">
              <img className="w-100 " src={'http://perros.com/macho/doberman'} alt="Home image" />
              {/* <h1>Busca tu gif favorito</h1> */}
            </div>
            :
            category.map((ctg) => (
              <GiftGrid key={ctg} category={ctg} /> || <h1>No se encontraron datos</h1>
            ))
        }
      </div>
    </div>
  )
}



export default GifExpertApp;