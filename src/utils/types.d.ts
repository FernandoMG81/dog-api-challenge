
export interface BreedInfo{
  name:string, 
  imgURL:string, 
  subBreeds?: string[],
}

export interface ActiveImage {
  url: string,
  width?: number,
  height?: number,
}

export interface Favorite{
  name: string,
  subBreed: string,
  imgURL: string,
}

interface ButtonClickHandler extends React.MouseEventHandler<HTMLButtonElement> {
  stopPropagation?: () => void;
}