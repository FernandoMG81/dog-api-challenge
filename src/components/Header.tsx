import { Link} from 'react-router-dom';
export const Header = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between max-w-6xl px-4 py-2 mx-auto">
          <div className="flex items-center gap-2 text-xl font-bold">
              Dog-api app
          </div>
          <nav className="flex items-center gap-4">
            <Link to='/'
              className="font-medium border-bottom-2 border-transparent [&:has(:focus)]:outline-none [&:has(:focus)]:ring-0 dark:[&:has(:focus)]:outline-none dark:[&:has(:focus)]:ring-0"
            >
              Breeds
            </Link>
            <Link to='/favorites'
              className="font-medium border-bottom-2 border-transparent [&:has(:focus)]:outline-none [&:has(:focus)]:ring-0 dark:[&:has(:focus)]:outline-none dark:[&:has(:focus)]:ring-0"
            >
              Favorites
            </Link>
          </nav>
          
      </div>
    </header>
  )
}
