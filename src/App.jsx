import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { Layout, Home, ShopingCart, Products } from './Components/index'
import CartContextProvider from './Context/CartContextProvider'



const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='shopingcart' element={<ShopingCart />} />
    </Route>
  )
)

function App() {
  return (
    <>
        <RouterProvider router={Routes} />
    </>
  )
}

export default App
