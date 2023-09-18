import { useState } from "react";
import useProducts from "../hooks/useProducts";
import Producto from "./Product";
const ListProducts = () => {
    const {productos} = useProducts();
    return (
        <>
            {productos.length ? 
                <>
                    <h2 
                        className="font-black text-3xl text-center"
                        >Productos 
                        <span className="text-[#EAC80B] font-bold">
                            Registrados
                        </span>
                    </h2>
                    { productos.map( (producto) =>  (
                        <Producto
                            key={[producto._id]}
                            producto={[producto]}
                        />
                        
                    ))}
                </>
            : ( <>
                    <h2 className="font-black text-3xl text-center">No Hay Productos Registrados</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Comienza Agregando Productos</p>
                </>
            )}
        </>
    )
}
export default ListProducts;