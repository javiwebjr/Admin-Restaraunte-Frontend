import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const {cerrarSesion} = useAuth();
    return(
        <header className="py-10 bg-[#EAC80B]">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-2xl text-gray-900 text-center">Administracion De{' '} <span className="text-white font-black">Restaurantes</span></h1>

                <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                    <Link to="/admin" className="text-white text-lg uppercase font-bold">Productos</Link>
                    <Link to="/admin" className="text-white text-lg uppercase font-bold">Pedidos</Link>

                    <button type="button" className="text-white text-xl uppercase font-bold" onClick={cerrarSesion}>
                        Cerrar Sesion
                    </button>
                </nav>
            </div>

        </header>
    );
};
export default Header;