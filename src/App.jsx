import Bookmarks from './components/Bookmarks'
import SideMenu from './components/SideMenu'
import './App.css'


function App() {

  return (
    <main className='flex md:gap-4 md:h-screen md:p-4 font-[Inter]'>
      <SideMenu />
      <div className='bg-stone-50 flex-1 md:rounded-lg md:p-2 md:border overflow-x-hidden'>
        <Bookmarks />
      </div>
    </main>
  )
}

export default App
