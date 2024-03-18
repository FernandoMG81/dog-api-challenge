import { BreedInfo } from "../utils/types";

const getAllBreeds = async() => {

  const response = await fetch('https://dog.ceo/api/breeds/list/all')
  const breeds = await response.json()

  return breeds.message;
}


export const getAllBreedsWithImg = async () => {
  const breeds = await getAllBreeds();

  const promises = Object.keys(breeds).map(async (b: string) => {
    const imgURL = await getRandomImageByBreed(b);
    
    const breedInfo: BreedInfo = { name: b, imgURL};

    if (breeds[b].length > 1) {
      breedInfo['subBreeds'] = breeds[b];
    }

    return breedInfo;
  });

  const allBreeds = await Promise.all(promises);

  return allBreeds;
};



export const getRandomImageByBreed = async (breed: string) => {
  if(breed.length === 0) return null
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(`Error al obtener las imágenes de ${breed}`, error);
    throw error;
  }
}


export const getImagesByBreed = async (breed: string) => {
  if(breed.length === 0) return null
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(`Error al obtener las imágenes de ${breed}`, error);
    throw error;
  }
}

export const getImagesBySubBreed = async (breed: string, subBreeds: string[]) => {
  try {
    const images: string[] = [];

    // Recorrer el array de subrazas y realizar llamadas para cada subraza
    for (const subBreed of subBreeds) {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`);
      const data = await response.json();
      
      // Concatenar las imágenes obtenidas para cada subraza
      images.push(...data.message);
    }

    return images;
  } catch (error) {
    console.error(`Error al obtener las imágenes de las sub-razas ${subBreeds.join(', ')}`, error);
    throw error;
  }
};