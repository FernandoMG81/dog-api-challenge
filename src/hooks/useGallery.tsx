import { useEffect, useState } from 'react';
import { getImagesByBreed, getImagesBySubBreed } from '../services/getAllBreeds';
import { BreedInfo } from '../utils/types';

export const useGallery = (breed: string | undefined, filterBreed: BreedInfo | null, selectedFilters?: string[]) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (filterBreed?.subBreeds && filterBreed.subBreeds.length > 0 && selectedFilters) {
          const subBreedImages = await getImagesBySubBreed(breed!, selectedFilters);
          setImages(subBreedImages);
        } else {
          const breedImages = await getImagesByBreed(breed!);
          setImages(breedImages);
        }
      } catch (error) {
        console.error('Error al obtener imágenes:', error);
      }
    };

    fetchData();
  }, [breed, filterBreed, selectedFilters]);

  return images;
};

