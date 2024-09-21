import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Favourites from './components/Favourites/Favourites.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import FullRecipe from './components/Home/FullRecipe.jsx'
import UserContextProvider from './components/context/UserContextProvider.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>,
//       },
//       {
//         path:'favourites',
//         element:<Favourites/>,
//       },
//       {
//         path:'contact',
//         element:<Contact/>,
//       },
//       {
//         path:'about',
//         element:<About/>,
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='https://Rajghosh786/github.io/Food-Recipe' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='Food-Recipe/fullrecipe/:id' element={<FullRecipe/>}/>
        <Route path='Food-Recipe/favourites' element={<Favourites/>}/>
        <Route path='Food-Recipe/contact' element={<Contact/>}/>
        <Route path='Food-Recipe/about' element={<About/>}/>
        <Route path='Food-Recipe/login' element={<Login/>}/>
        <Route path='Food-Recipe/register' element={<Register/>}/>
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UserContextProvider>
      <RouterProvider router={router}> 
      </RouterProvider>
      </UserContextProvider>
  </StrictMode>,
)
