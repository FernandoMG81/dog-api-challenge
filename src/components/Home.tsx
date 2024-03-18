import { Link } from 'react-router-dom'
import { BreedSkeleton } from './BreedSkeleton'
import { useContext } from 'react'
import { DogContext } from '../context/DogContext'
import { BreedInfo } from '../utils/types';


export const Home = () => {
  
  const context = useContext(DogContext)
  let breeds: BreedInfo[] | null = null
  if(context){
    breeds = context.breeds
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">

        {/* Header */}
        <div className="flex flex-col justify-center items-center m-5">
          <h1 className="text-3xl font-bold">Explore Breeds</h1>
          <p className="text-gray-500 dark:text-gray-400">Click on a breed to see adorable photos</p>
        </div>

        {/* Search bar */}
        <div className="flex justify-center mb-16">
          <input
            className="w-full max-w-md px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary"
            placeholder="Search breeds..."
            type="text"
          />
        </div>

        {/* List of all dogs */}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          {
            breeds && breeds.length > 0 ? breeds.map((breed, index) => (

              <div key={index} className="flex items-center justify-center gap-2 ml-5">
                <Link to={breed.name} className="font-medium flex-1 text-center transition-transform transform hover:scale-105">
                  <img
                    alt="Dog Breed"
                    className="w-52 h-52 mx-auto aspect-square object-cover border mb-2 border-gray-200 rounded-lg overflow-hidden dark:border-gray-800"
                    src={breed.imgURL}
                  />
                  <span className='text-xl bg-violet-200 rounded-lg px-2'>{breed.name}</span>
                  {
                    breed.subBreeds && <span className='text-xl border rounded-md bg-cyan-500 text-center mx-2 px-1'>{breed.subBreeds.length}</span> 
                  }
                  
                </Link>
              </div>


            )) :
              Array.from({ length: 20 }).map((_, index) => (

                <div key={index} className="flex items-center justify-center gap-2 ml-5">
                  <BreedSkeleton />
                </div>


              ))
          }
        </div>
      </main>
    </div>
  )
}
