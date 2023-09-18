import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from '../components/Alert';
import clienteAxios from '../config/axios';
const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email === ''){
            setAlert({msg:'El Email de su registro es obligatorio', error: true})
            return;
        }
        try {
            const {data} = await clienteAxios.post('/restaurante/reset-password', {email})
            console.log(data);
            setAlert({msg: data.msg})
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }

    }
    const {msg} = alert;
    return (
        <>
            <div>
                <h1 className="font-black text-6xl">Reinicia tu Password</h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alert
                alert={alert}
                />}
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label 
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder="Email de tu cuenta"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                        />

                    </div>
                    <input 
                        type="submit" 
                        value="Recibir Instrucciones"
                        className="bg-[#69e0db] w-full py-3 px-10 rounded-xl text-gray-900 uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>
                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link 
                        className='block text-center my-5 text-gray-500 hover:underline'
                        to="/">¿Ya tienes una cuenta? Inicia Sesion
                    </Link>
                    <Link 
                        className='block text-center my-5 text-gray-500 hover:underline'
                        to="/registrar">¿No tienes una cuenta? Registrate
                    </Link>
                </nav>
            </div>
        </>
    )
}
export default ForgetPassword;