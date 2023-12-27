import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="homePage">
        <h1 className="homeTitle">Wallpaper App</h1>
        <p className="homeDescription">
            Explore nossa coleção incrível de wallpapers
        </p>
        <Link to="/wallpapers">Explore Wallpapers</Link>
    </div>
  )
}

export default Home;