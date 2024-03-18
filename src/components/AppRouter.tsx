import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Favorites } from './Favorites';
import { BreedList } from './BreedList';

export const AppRouter = () => {
  return (
    <Routes>
      <Route index path='/*' element={<Home /> } />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/:breed' element={<BreedList />}/>        
    </Routes>
  )
}
