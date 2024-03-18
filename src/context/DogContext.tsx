import { Dispatch, SetStateAction, createContext } from "react";
import { BreedInfo, Favorite } from "../utils/types";



interface DogContextType{
  breeds: BreedInfo[];
  favorites: Favorite[];
  setFavorites: Dispatch<SetStateAction<Favorite[]>>;
}


export const DogContext = createContext<DogContextType | null>(null)