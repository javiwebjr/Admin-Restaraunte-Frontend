import useProductos from "../hooks/useProducts";
function Producto ({producto}) {
    const {eliminarProducto} = useProductos();
    const [{nombre, _id}] = producto;
    const [{categoria, precio}] = producto;
    const [{nombreCategoria}] = categoria;
    const [{valor}] = precio;


    return(
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-gray-900 my-2">Nombre Producto: {''} 
                <span className="font-normal normal-case text-black">{nombre}
                </span>
            </p>
            <p className="font-bold uppercase text-gray-900 my-2">Categoria: {''} 
                <span className="font-normal normal-case text-black">{nombreCategoria}
                </span>
            </p>
            <p className="font-bold uppercase text-gray-900 my-2">Precio: {''} 
                <span className="font-normal normal-case text-black">{valor}
                </span>
            </p>
            
            <div className="flex justify-between my-5">
                {/* <button 
                    type="button"
                    className="py-2 px-10 bg-[#EAC80B] hover:bg-gray-900 text-white uppercase font-bold rounded-lg"
                    onClick={()=> editarProducto(_id)}
                >
                    Editar
                </button> */}
                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white uppercase font-bold rounded-lg"
                    onClick={() => eliminarProducto(_id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
export default Producto;