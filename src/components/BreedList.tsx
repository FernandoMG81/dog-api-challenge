import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ActiveImage, BreedInfo, Favorite } from "../utils/types"
import { DogContext } from "../context/DogContext"
import { useGallery } from "../hooks/useGallery"
import { Gallery } from "./Gallery"


export const BreedList = () => {

  //const [images, setImages] = useState<string[]>([])
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const { breed = '' } = useParams<{ breed: string }>()
  const context = useContext(DogContext)

  //let breeds: BreedInfo[] | null = null
  const { breeds, favorites, setFavorites} = context!
  let filterBreed: BreedInfo | null = null
  let options: string[] = []

//if (context) {
//  breeds = context.breeds
    filterBreed = breeds?.filter(item => item.name === breed)[0] || null
    options = filterBreed?.subBreeds || [];
//}


  const images = useGallery(breed, filterBreed, selectedFilters)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (filterBreed?.subBreeds && filterBreed.subBreeds.length > 0) {
  //         const subBreedImages = await getImagesBySubBreed(breed!, selectedFilters);
  //         setImages(subBreedImages);
  //       } else if(filterBreed !== null){
  //         const breedImages = await getImagesByBreed(breed!);
  //         setImages(breedImages);
  //       }
  //     } catch (error) {
  //       console.error('Error al obtener imágenes:', error);
  //     }
  //   };

  //   fetchData();
  // }, [breed, filterBreed, selectedFilters]);


  const handleClick = (imageURL: string) => {
    setActiveImage({ ...activeImage, url: imageURL })
  }

  const handleOutsideClick = () => {
    setActiveImage(null)
  }

  const handleCheckboxChange = (selectedOptions: string[]) => {
    setSelectedFilters(selectedOptions);
  };


  const handleLikeClick = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    e.stopPropagation();
  
    const existingFavorite = favorites.find(favorite => favorite.imgURL === url);
  
    if (existingFavorite) {
      const updatedFavorites = favorites.filter(favorite => favorite.imgURL !== url);
      setFavorites(updatedFavorites);
    } else {
      const newFavorite: Favorite = {
        name: breed!,
        subBreed: '',
        imgURL: url
      };
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
    }
  };
  
  return (
    <>
      <Gallery
        images={images}
        breed={breed}
        options={options}
        onCheckboxChange={handleCheckboxChange}
        activeImage={activeImage}
        handleClick={handleClick}
        handleOutsideClick={handleOutsideClick}
        handleLikeClick={handleLikeClick}
        favorites={favorites}
      />
    </>
  )
}


