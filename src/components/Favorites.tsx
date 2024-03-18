import { useContext, useState } from "react"
import { ActiveImage } from "../utils/types"
import { DogContext } from "../context/DogContext"
import { Gallery } from "./Gallery"


export const Favorites = () => {

  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null)
  const context = useContext(DogContext)

  const { favorites, setFavorites} = context!

 const images = favorites.map(img => img.imgURL) as string[]
 
  
  const handleClick = (imageURL: string) => {
    setActiveImage({ ...activeImage, url: imageURL })
  }

  const handleOutsideClick = () => {
    setActiveImage(null)
  }



  const handleLikeClick = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    e.stopPropagation();
    const updatedFavorites = favorites.filter(favorite => favorite.imgURL !== url);
    setFavorites(updatedFavorites);
  };
  
  return (
    <>
      <Gallery
        images={images}
        breed={'Favorites'}
        options={[]}
        activeImage={activeImage}
        handleClick={handleClick}
        handleOutsideClick={handleOutsideClick}
        handleLikeClick={handleLikeClick}
        favorites={favorites}
      />
    </>
  )
}


