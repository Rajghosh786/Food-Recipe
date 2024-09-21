import React, { useState,useEffect, useContext } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import UserContext from "../context/UserContext";

function Home() {
    const [search,setSearch] = useState('')
    const [recipe,setRecipe] = useState([])
    const {setDynamicId} = useContext(UserContext)

    const key ='488e3ee1-3d42-45f2-8fd4-d45faa08260f'

    const onSearching = async(e)=>{
        e.preventDefault()
        // console.log(e.target.value)
        // setSearch(e.target.value)
        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${key}`)
            const data =  await response.json()
            const logged = data.data
            setRecipe(logged.recipes)
            setSearch('')
            // console.log(logged.recipes)
            }catch(error){console.log(error)}
    }   

useEffect(() => {
    const searchQuery = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"]
    let randomItems = Math.floor(Math.random() * searchQuery.length)
    const newRandomItems=searchQuery[randomItems]
    //console.log(newRandomItems)
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${newRandomItems}&key=${key}`)
        .then(res => res.json())
        .then(data => {
            const logged = data.data
            setRecipe(logged.recipes)
            setSearch('')
            // console.log(logged.recipes)
        })
}, [])

const consoleCheck=(e)=>{
    console.log(e)
    setDynamicId(e)
}
  return (
    <>
         <form action="" onSubmit={onSearching} >
            <div className='flex justify-center items-center flex-col'>
                <div>
                    <input className='bg-orange-700 m-10 w-96 p-3 rounded-2xl outline-none hover:bg-orange-300' 
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                    type="text" placeholder='Search Item'/>
                </div>                
                <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
                    {recipe.map(recipe =>(
                    <div key ={recipe.id} className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-red-700'>
                        <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
                            <img className='image' src={recipe.image_url} alt="Sorry No Image Found"/>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-red-950 font-extrabold'>{recipe.title}</h1>
                            <h3 className='text-center text-cyan-950'>{recipe.publisher}</h3>
                            <Link onClick={()=>consoleCheck(recipe.id)} to={`fullrecipe/${recipe.id}`} /*target='_blank'*/ className='text-center bg-green-300 p-2 m-1 rounded-lg'>Full Recipe</Link>
                        </div> 
                    </div>
                    ))}
                </div>
            </div>
         </form>
    </>
  )
}

export default Home