// Gallery.tsx

import { MouseEventHandler } from "react";

interface GalleryItemProps {
  url: string;
  onClick: (url: string) => void;
  onLikeClick: MouseEventHandler<HTMLElement>;
  isFavorite: boolean
}

const GalleryItem = ({ url, onClick, onLikeClick, isFavorite } : GalleryItemProps) => (
  <li>
    <button className="relative animate-slide-up-fade" onClick={() => onClick(url)}>
      <img className='max-w-full mb-2 block outline outline-2 outline-neutral-100 outline-offset-[-4px]  transition-transform transform duration-500 hover:scale-105 cursor-zoom-in' src={url} alt="" />
      {/* Botón de like */}
      <picture
        className='sd:hidden absolute bottom-3 right-1 text-xl text-white transition transform hover:scale-150'
        onClick={onLikeClick}
      >
        {
          isFavorite ? '💛' : '🖤' 
        }
      </picture>
    </button>
  </li>
);

export default GalleryItem;
