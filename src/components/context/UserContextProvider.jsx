import React, { useState } from 'react'
import userContext from './UserContext'

const UserContextProvider=({children})=> {
    const [dynamicId, setDynamicId] = useState(null)
    const [favourites, setFavourites] = useState([])
  return (
    <userContext.Provider value={{dynamicId, setDynamicId, favourites, setFavourites}}>
        {children}
    </userContext.Provider>
  )
}

export default UserContextProvider