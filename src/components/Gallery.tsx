import { MouseEvent } from "react";
import GalleryItem from "./GalleryItem";
import { ActiveImage, Favorite } from "../utils/types";
import { CheckboxSelector } from "./CheckboxSelector";

interface GalleryProps {
  images: string[];
  breed: string;
  options: string[];
  onCheckboxChange?: (selectedOptions: string[]) => void;
  activeImage: ActiveImage | null;
  handleClick: (imageURL: string) => void;
  handleOutsideClick: () => void;
  handleLikeClick: (e: MouseEvent, url: string) => void;
  favorites: Favorite[];
}

export const Gallery = ({
  images,
  breed,
  options,
  onCheckboxChange,
  activeImage,
  handleClick,
  handleOutsideClick,
  handleLikeClick,
  favorites,
}: GalleryProps) => (
  <>
    {
      activeImage &&
      <div
        onClick={handleOutsideClick}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-90 bg-black z-50 cursor-zoom-out"
      >
        <img
          className='max-w-2xl max-h-screen animate-zoom-in animate-duration-300'
          src={activeImage.url}
          alt="image of a dog"
        />
      </div>

    }

    {
      options.length > 0 && <CheckboxSelector breed={breed} options={options} onChange={onCheckboxChange!} />
    }

    <ul className="columns-3xs gap-2 mx-5 my-5">
      {
        images.map((url) => (
          <GalleryItem 
            key={url} 
            url={url} 
            onClick={() => handleClick(url)} 
            onLikeClick={(e) => handleLikeClick(e, url)} 
            isFavorite={favorites.some(favorite => favorite.imgURL === url)} />
        ))
      }
    </ul>
  </>
);
