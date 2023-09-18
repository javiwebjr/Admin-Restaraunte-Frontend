import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaPrivada from './layout/PrivateLayout';

import Login from './pages/Login'
import Register from './pages/Register';
import ConfirmAccount from './pages/ConfirmAccount';
import ForgetPassword from './pages/ForgetPassword';
import NewPassword from './pages/NewPassword';
import AdminProducts from './pages/AdminProducts';

import { AuthProvider } from './context/AuthProvider';
import { ProductsProvider } from './context/ProductsProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <Routes>
              <Route path="/" element={<AuthLayout/>}>
                  <Route index element={<Login/>}/>
                  <Route path='registrar' element={<Register/>}/>
                  <Route path='olvide-password' element={<ForgetPassword/>}/>
                  <Route path='olvide-password/:token' element={<NewPassword/>}/>
                  <Route path="confirmar/:id" element={<ConfirmAccount/>}/>
              </Route>
              <Route path='/admin' element={<RutaPrivada/>}>
                  <Route index element={<AdminProducts/>}/>
              </Route>
          </Routes>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
