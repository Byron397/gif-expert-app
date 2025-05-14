import { useState } from "react";
import { AddCategory, GifGrid  } from "./components";

export const GifExpertApp = () => {

    {/* logica para el listado de gif */}
    const [categories, setCategories] = useState([
        'One Punch'
    ]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Agrega nuevas categorias */}
        <AddCategory
            onNewCategory={ onAddCategory }
        />

        {/* Item */}
        {/* Lista de Gif */}

        {
            categories.map(
                (category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )
            )
        }
        
    </>
  );
}
