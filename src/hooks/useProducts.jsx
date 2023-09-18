import { useContext } from "react";
import ProductsContext from '../context/ProductsProvider';
const useProductos = () => {
    return useContext(ProductsContext)
}
export default useProductos;