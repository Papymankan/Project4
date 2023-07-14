import Home from './Pages/Home/Home'
import UserList from './Pages/UserList/UserList'
import NewUser from './Pages/NewUser/NewUser'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/Product'



let routes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <UserList /> },
    { path: '/products', element: <Products /> },
    { path: '/product/:productID', element: <Product /> },
]

export default routes