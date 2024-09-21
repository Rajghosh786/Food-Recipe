import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'

function Favourites() {
  const {favourites,} = useContext(UserContext)
  const [todos, setTodos] = useState([])
  const [todos1, setTodos1] = useState([])
  //console.log(favourites)

  useEffect(() => {
    setTodos(favourites)
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(JSON.parse(localStorage.getItem("todos")))    
    // console.log(todos);    
  }, [todos])

  


  return (
            <div className='flex justify-center items-center flex-col'>
                <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
                    {favourites.length === 0 
                    ?<div className='text-3xl text-red-800'>Nothing added in Favourites</div>
                    :
                    favourites.map(favourites =>(
                    <div /*key ={favourites.id}*/ className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-red-700'>
                        <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
                            <img className='image' src={favourites.image_url} alt="Sorry No Image Found"/>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-red-950 font-extrabold'>{favourites.title}</h1>
                            <h3 className='text-center text-cyan-950'>{favourites.publisher}</h3>
                            <Link /*onClick={e=>setDynamicId(favourites.id)}*/ to={`/fullrecipe/${favourites.id}`} className='text-center bg-green-300 p-2 m-1 rounded-lg'>Full Recipe</Link>
                        </div> 
                    </div>
                     ))} 
                </div>
            </div>
  )
}

export default Favourites

// ohk silly mistake from myside here was i was doing (to={`fullrecipe/${favourites.id}`}) in last link tag instead of (to={`/fullrecipe/${favourites.id}`}) a slash at start of to was very crucial