import { useState } from "react";
import FormProducts from "../components/FormProducts";
import ListProducts from "../components/ListProducts";
const AdminProducts = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    return(
        <div className="flex flex-col md:flex-row">
            <button 
                type="button" 
                className="bg-[#EAC80B] text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden" 
                onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </button>
            <div className={`${mostrarFormulario ? 'block' : 'hidden' } md:block md:w-1/2 lg:w-2/5`}>
                <h2 
                    className="font-black text-3xl text-center"
                    >Registra tus
                    <span className="text-[#EAC80B] font-bold">
                        Productos
                    </span>
                </h2>
                <FormProducts/>
            </div>
            <div className="md:w-1/2 lg:w-3/5">
                <ListProducts/>
            </div>
        </div>
    )
}
export default AdminProducts;