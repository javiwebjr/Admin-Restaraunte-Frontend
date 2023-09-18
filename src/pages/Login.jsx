import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import Alert from '../components/Alert';
import clienteAxios from '../config/axios';
function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({});
    const {setAuth} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if([email,password].includes('')){
            setAlert({msg:'Todos los campos son obligatorios', error: true})
            return;
        }
        try {
            const {data} = await clienteAxios.post('/restaurante/login', {email, password});
            localStorage.setItem('token', data.token);
            setAuth(data);
            navigate('/admin');
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
            
        }
    }
    const {msg} = alert;

    return(
        <>
            {/* <div className="bg-gradient-to-t from-[#a8edea] to-[#fed6e3] h-screen w-full"> */}
                <div>
                    <h1 className="font-bold md:text-6xl text-3xl text-center text-[#EAC80B] pt-8">Bienvenido a APC - Administra Tu Puesto de Comida</h1>
                </div>
                <div className="mt-20 shadow-xl mx-5 px-5 py-10 rounded-xl bg-white">
                    {msg && <Alert
                        alert={alert}
                    />}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="text-gray-700 block text-xl font-bold">Email</label>
                            <input type="email" placeholder="example@example.com" 
                                className="border w-full p-3 mt-3 bg-gray-100 rounded-md"
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 block text-xl font-bold">Password</label>
                            <input type="password" placeholder="Min 6 characters *" 
                                className="border w-full p-3 mt-3 bg-gray-100 rounded-md"
                                value={password}
                                onChange={ e => setPassword(e.target.value)}
                                autoComplete="off"
                            />
                        </div>
                        <input type="submit" 
                            value="Iniciar Sesion"
                            className="bg-[#69e0db] w-full py-3 px-10 rounded-md uppercase font-bold mt-5 hover:cursor-pointer hover:bg-[#e0696e]"
                        />
                        
                    </form>

                    <nav className="mt-10 lg:flex lg:justify-between">
                        <Link
                            className="block text-center my5 text-gray-500 hover:underline"
                            to="/registrar"
                        >No tienes cuenta? Registrate
                        </Link>
                        <Link
                            className="block text-center my5 text-gray-500 hover:underline"
                            to="/olvide-password"
                        >Olvide Mi Password
                        </Link>
                    </nav>
                </div>
            {/* </div> */}
        </>
    )

}
export default Login;