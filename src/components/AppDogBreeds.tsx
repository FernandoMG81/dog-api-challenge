import { DogProvider } from "../context/DogProvider"
import { AppRouter } from "./AppRouter"
import { Header } from "./Header"

export const AppDogBreeds = () => {

  return (
    <DogProvider>
      <Header />
      <AppRouter />
    </DogProvider>
  )
}
