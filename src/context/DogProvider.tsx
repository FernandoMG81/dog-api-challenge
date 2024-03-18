import { ReactNode, useEffect, useState } from 'react';
import { DogContext } from './DogContext';
import { BreedInfo, Favorite } from '../utils/types';
import { getAllBreedsWithImg } from '../services/getAllBreeds';


interface AuxProps {
  children: ReactNode;
}
export const DogProvider = ({ children }: AuxProps) => {

  const [favorites, setFavorites] = useState<Favorite[]>([])

  const [breeds, setBreeds] = useState<BreedInfo[]>([])
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        if (dataLoaded) return
        const data = await getAllBreedsWithImg()

        setBreeds(data)
        setDataLoaded(true)

        const localStorageFavorites = localStorage.getItem('favorites');
        if (localStorageFavorites) {
          const favorites = JSON.parse(localStorageFavorites) 
          setFavorites(favorites)
        }
      } catch (error) {
        console.error('Error al obtener las razas de perros', error)
      }
    }

    fetchBreeds()

  }, [dataLoaded])


  return (
    <DogContext.Provider value={{
      breeds,
      favorites,
      setFavorites
    }}>
      {children}
    </DogContext.Provider>
  )
}
