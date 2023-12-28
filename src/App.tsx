import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Wallpapers from './pages/Wallpapers';
import WallpaperDetails from './pages/Wallpaper-Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/wallpapers" element={ <Wallpapers /> }></Route>
      <Route path="/wallpapers/:wallpaperId" element={ <WallpaperDetails /> }></Route>
    </Routes>
  )
}

export default App
