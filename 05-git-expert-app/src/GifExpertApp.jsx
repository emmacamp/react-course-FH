import { useState } from "react";
import { AddCategories, GiftGrid } from "./components";


const GifExpertApp = () => {
  const [category, setCategory] = useState([]);

  const onAddCategory = (newCategory) => {
    if (category.includes(newCategory)) return;
    setCategory([newCategory, ...category])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategories addCategories={onAddCategory} stateCategories={category} />
      <div >
        {
          category.map((ctg) => (
            <GiftGrid key={ctg} category={ctg} />
          ))
        }
      </div>
    </>
  )

}



export default GifExpertApp;