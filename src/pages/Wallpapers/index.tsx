import styles from './wallpapers.module.css';
// import { wallpapers } from '../../data/data'
import { Link } from 'react-router-dom';
import { fetchWallpapersUnsplash } from '../../services/unsplashAPI';
import { useEffect, useState } from 'react';
import { WallpaperType } from '../../types/wallpaperType';

function Wallpapers() {
  const [wallpapers, setWallpapers] = useState<WallpaperType[]>([])
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const returnedData = await fetchWallpapersUnsplash();
        setWallpapers(returnedData);
        // console.log(returnedData);
      } catch (error) {
        console.log('Deu erro', error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [])

  if (loading) {
    return (
      <>
        <h1>Carregando...</h1>
      </>
    );
  }

  return (
    <>
      <h1>Wallpapers</h1>
      <div className={ styles.wallpapersListContainer }>
        { 
          wallpapers.map((wallpaper) => (
              <div 
                className={ styles.cardContainer }
                key={ wallpaper.id }>
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