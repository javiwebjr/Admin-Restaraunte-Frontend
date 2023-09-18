import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";
const ProductsContext = createContext();
const ProductsProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState({});
    const {auth} = useAuth();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const token = localStorage.getItem('token');
                if(!token) return;
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const respuesta = await clienteAxios('/admin', config);
                const prueba = await respuesta.data;
                setProductos(prueba);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerProducto();
    }, [auth])

    const guardarProducto = async (producto) => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const {data} = await clienteAxios.post('/admin', producto, config);
            const { createdAt, updatedAt, __v, ...productoAlmacenado } = data;

            setProductos([productoAlmacenado, ...producto]);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    }
    // const editarProducto = async id => {
    //     const token = localStorage.getItem('token');
    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${token}`
    //         }
    //     }
    //     try {
    //         const {data} = await clienteAxios.put(`/admin/${producto.id}`, producto, config);
    //         const productosActualizado = productos.map(productoState => productoState._id === data._id ? data : productoState);
    //         setProductos(productosActualizado);
    //     } catch (error) {
    //         console.log(error)    
    //     }
    // }
    // const setEdicion = (producto) => {
    //     setProducto(producto)
    // }
    const eliminarProducto = async id => {
        const confirmar = confirm("¿Deseas Eliminar Este Registro?");
        if(confirmar){
            try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const {data} = await clienteAxios.delete(`/admin/${id}`,config);
            const productoActualizado = productos.filter(productosState => productosState._id !== id)

            setProductos(productoActualizado)
                
            } catch (error) {
                console.log(error)
            }
        }
    }
    return(
        <ProductsContext.Provider
            value={{
                productos, 
                guardarProducto,
                // setEdicion, 
                producto,
                eliminarProducto
                
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
export {
    ProductsProvider
}
export default ProductsContext;