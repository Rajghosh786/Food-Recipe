import React, { useContext,useEffect, useState } from 'react'
import UserContext from "../context/UserContext";
import { useParams } from 'react-router-dom';

function FullRecipe() {
  const [recipeDetails,setRecipeDetails] = useState([])
  const key ='488e3ee1-3d42-45f2-8fd4-d45faa08260f'
  const {dynamicId} = useContext(UserContext)
  const [imageSrc,setImageSrc] = useState(null)
  const [publisher,setPublisher] = useState(null)
  const [title,setTitle] = useState(null)
  const [logging,setLogging] = useState([])
  const {favourites,setFavourites} = useContext(UserContext)
  // const params = useParams()
  // console.log(params.id)
  // const id = params.id
  //useParams matlab ki search box ke address se parameter se value le lega

useEffect(() => {
  const loading=async()=>{
    if(dynamicId)
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${dynamicId}?key=${key}`);
      const data = await response.json();
      const logged = data.data.recipe;
      console.log(data.data);
      setLogging(logged)
      setRecipeDetails(logged.ingredients);
      // console.log(recipeDetails)
      setImageSrc(logged.image_url);
      setPublisher(logged.publisher);
      setTitle(logged.title.toUpperCase());
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
      loading()
}, [])

  function addingFavourites(getCurrentItem){
    console.log(getCurrentItem);
    // let newFav = [favourites]
    let cpyFavourites = [...favourites]
    console.log(cpyFavourites)
    const index = cpyFavourites.findIndex(item=> item.id === getCurrentItem.id)
    console.log(favourites.id)
    if(index === -1){
      cpyFavourites.push(getCurrentItem)
      //console.log('push',index)
    }else{
      cpyFavourites.splice(index)
      //console.log('splice',index)
    }
    setFavourites(cpyFavourites)
  }
  return (
    <>
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src={imageSrc
                          }
                          alt="Sorry No Image Found"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <p className="text-cyan-900 font-bold">
                      {publisher}
                      </p>
                      <h1 className="text-2xl text-orange-800 font-bold">
                      {title}
                      </h1>
                      {recipeDetails.map(ingredient=>(
                        <h3 key={ingredient.description}className='m-4 text-xl'>
                          {ingredient.quantity}{ingredient.unit}{ingredient.description}
                        </h3>
                      ))}
                      <button onClick={()=>addingFavourites(logging)} className='bg-orange-700 p-2 rounded-lg text-black hover:bg-orange-300'>
                      {favourites && favourites.length > 0 && favourites.findIndex(
                        (item) => item.id === logging.id
                      ) !== -1
                        ? "Remove from favorites"
                        : "Add to favorites"}
                        </button>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default FullRecipe


// in this component the if else statement inside function addingFavourites was not understandable to me

// again instead of getCurrentItem i was using favourites big mistake from my side