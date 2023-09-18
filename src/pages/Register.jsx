import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from '../components/Alert';
import clienteAxios from '../config/axios';
const Register = ()=> {
    const [nombre, setNombre] = useState('');
    const [restaurante, setRestaurante] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [alert, setAlert] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        if([nombre, email, password, repetirPassword, restaurante].includes('')){
            setAlert({msg: 'Todos los campos son obligatorios', error: true});
            return;
        }
        if(password !== repetirPassword){
            setAlert({msg: 'Los password deben coincidir', error: true});
            return
        }
        if(password.length < 6){
            setAlert({msg: 'Minimo 6 caracteres', error: true});
            return
        }
        setAlert({});
        //save user
        try {
            await clienteAxios.post('/restaurante', {nombre, restaurante, email, password});
            setAlert({msg:'Usuario creado, porfavor revisa tu email', error: false})
        } catch (error) {
            setAlert({msg: error.response.data.msg, error})
        }
        
    }
    const {msg} = alert;

    return (
        <>
            <div>
                <h1 className="text-[#EAC80B] font-black text-6xl">Administra Tu {" "}<span className="text-black">Negocio</span>
                </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alert
                    alert={alert}
                />}
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label 
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre
                        </label>
                        <input 
                            type="text" 
                            placeholder="Nombre de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label 
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre de tu Negocio
                        </label>
                        <input 
                            type="text" 
                            placeholder="Ej: Que chivo Restaurante"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={restaurante}
                            onChange={e => setRestaurante(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label 
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder="Email de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label 
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Nuevo Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="my-5">
                        <label 
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Confirma tu password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Confirma Tu Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={repetirPassword}
                            onChange={e => setRepetirPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Crear Cuenta"
                        className="bg-[#69e0db] w-full py-3 px-10 rounded-xl text-gray-900 uppercase font-bold mt-5 hover:cursor-pointer hover:bg-[#e0696e] md:w-auto"
                    />
                </form>
                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link 
                        className='block text-center my-5 text-gray-500 hover:underline'
                        to="/">¿Ya tienes una cuenta? Inicia Sesion
                    </Link>
                    <Link 
                        className='block text-center my-5 text-gray-500 hover:underline'
                        to="/olvide-password">Olvide mi password
                    </Link>
                </nav>
            </div>
        </>
    )
}
export default Register;