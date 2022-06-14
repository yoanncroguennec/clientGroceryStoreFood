import React, { createContext, useState } from 'react'

// Le "Contexte" : Conçu pour partager des données sous forme de variables globales
export const UserProfileContext = createContext({
    address: "", 
    zipCode: "", 
    city: "",
    // "Setter" pour le "context"
    setUserProfileContext: info => {}
})

// Le "ContextProvider" : Passe les valeurs du context à tous les composants enfants du context Provider 
export const UserProfileContextProvider = ({ children }) => {

    const userProfileState = {
        address: "", 
        zipCode: "", 
        city: "",
        setUserProfileContext: info =>  
          // Copie de cet état, puis retourné l'état modifié
          // "setUserProfile" met à jour le "Context"        
            setUserProfile(prevState => ({
            ...prevState,
            [Object.keys(info)]: Object.values(info)[0]
        }))
    }

    const [userProfile, setUserProfile] = useState(userProfileState)
    return (
        <UserProfileContext.Provider value={userProfile}>
            { children }
        </UserProfileContext.Provider>
    )
}

