import { createContext, useState, type ReactNode, useContext } from "react";

type RatingsMap = Record<number, number>

type RatingsContextType = {
    ratings: RatingsMap
    getRating: (id:number, defaultRating?: number) => number
    ratePokemon: (id: number, rating:number) => void
}

type RatingsProviderProps = {
    children: ReactNode
}


 const RatingsContext = createContext<RatingsContextType| undefined>(undefined)


const getStoredRating = (): RatingsMap => {
    const savedRating = localStorage.getItem("pokemon-ratings");
    return savedRating ? JSON.parse(savedRating) : {};
  };
  
  const saveRating = (ratings: RatingsMap) => {
    localStorage.setItem("pokemon-ratings", JSON.stringify(ratings));
  };



export const RatingsProvider = ({children}: RatingsProviderProps) => {
    const [ratings, setRatings] = useState<RatingsMap>(() =>
    getStoredRating())

    const ratePokemon = (id: number, rating: number) => {
        setRatings((prevRatings) => {
            const updatedRatings = {
                ...prevRatings,
                [id]: rating
            }
            saveRating(updatedRatings)
            return updatedRatings
        })
    }

    const getRating = (id: number, defaultRating = 0) => {
        return ratings[id] ?? defaultRating
    }

    return (
        <RatingsContext.Provider value={{ ratings, getRating, ratePokemon }}>
            {children}
        </RatingsContext.Provider>
    )
}

export function useRatings() {
    const context = useContext(RatingsContext)

    if(!context) {
        throw new Error("RatingsContext must be used inside RatingsProvider")
    }
    return context
}