import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alert from "../components/Alert";
import axios from "axios";
import clienteAxios from "../config/axios";
const ConfirmAccount = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alert, setAlert] = useState({});

    const params = useParams();
    const {id} = params;

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `/restaurante/confirmar/${id}`;
                const {data} = await clienteAxios(url);
                setCuentaConfirmada(true);
                setAlert({
                    msg: data.msg
                })
            } catch (error) {
                setAlert({
                    msg: error.response.data.msg,
                    error: true
                })
            }
            setCargando(false);
        }
        confirmarCuenta();
    }, [])
    return (
        <>
            <div>
                <h1 className="text-[#EAC80B] font-black text-6xl">Confirma Tu Cuenta y Comienza a Administrar tu {" "}<span className="text-black">Negocio</span>
                </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                { !cargando && <Alert
                  alert={alert}
                />}

                { cuentaConfirmada && (
                  <Link 
                    className='block text-center my-5 text-gray-500'
                    to="/">Iniciar Sesion
                  </Link>
                ) }
            </div>
        </>
    )
}
export default ConfirmAccount;