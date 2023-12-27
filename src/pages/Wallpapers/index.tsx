import styles from './wallpapers.module.css';
import { wallpapers } from '../../data/data'
import { Link } from 'react-router-dom';

function Wallpapers() {
  return (
    <>
      <h1>Wallpapers</h1>
      <div className={ styles.wallpapersListContainer }>
        { 
          wallpapers.map((wallpaper) => (
              <div className={ styles.cardContainer }>
                <div className={ styles.cardTitle }>
                  <p className={ styles.cardTitle }>{ wallpaper.title}</p>
                </div>
                <img className={ styles.cardImage } src={ wallpaper.url }></img>
                <Link className={ styles.cardButtonRight } to={`/wallpapers/${wallpaper.id}`}>Detalhes</Link>
              </div>
          )) 
        }
      </div>
    </>  
  )
}

export default Wallpapers;