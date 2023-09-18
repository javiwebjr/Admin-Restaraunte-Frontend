import { useState, useEffect } from "react";
import Alert from "./Alert";
import useProductos from '../hooks/useProducts';

const FormProducts = () => {
    const [nombre, setNombre] = useState('');
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [valor, setValor] = useState('');

    const [alert, setAlert] = useState({});
    const [id, setId] = useState(null);

    const {guardarProducto, producto} = useProductos();

    // useEffect(() => {
    //     if(producto?.nombre){
    //         console.log(producto.nombre)
    //         // setNombreCategoria(nombreCategoria);
    //         // setValor(valor);
    //     }
    // }, [producto])

    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, nombreCategoria, valor].includes('')){
            setAlert({
                msg:'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
        guardarProducto({nombre,nombreCategoria,valor})
        setAlert({
            msg:'Se guardo correctamente'
        })
        setNombre('');
        setNombreCategoria('');
        setValor('');

    }
    const {msg} =alert;

    return (
        <>
            <form 
                className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md mt-10"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">Producto</label>
                    <input
                        type="text" id="nombre" placeholder="Nombre del producto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="categoria" className="text-gray-700 uppercase font-bold">Categoria</label>
                    <input
                        type="text" id="categoria" placeholder="Categoria del producto: Ej: SODAS" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreCategoria}
                        onChange={e => setNombreCategoria(e.target.value)} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="precio" className="text-gray-700 uppercase font-bold">Precio</label>
                    <input
                        type="text" id="precio" placeholder="Precio del producto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />
                </div>

                <input type="submit" className="bg-[#69e0db] w-full p-3 text-white uppercase font-bold hover:bg-[#e0696e] cursor-pointer transition-colors" value={id ? 'Guardar Cambios' : 'Agregar Producto'} />
            </form>
            {msg && <Alert alert= {alert}/>}
        </>
    )
}
export default FormProducts;