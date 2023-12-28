import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './wallpaper-details.module.css';
import { fetchSingleWallpaper } from "../../services/unsplashAPI";
import { useEffect, useState } from "react";
import { WallpaperType } from "../../types/wallpaperType";

function WallpaperDetails( ) {
  const { wallpaperId } = useParams();

  const [wallpaper, setWallpaper] = useState<WallpaperType>()

  useEffect(() => {
    async function getInfo() {
      const returnedData = await fetchSingleWallpaper(wallpaperId);
      setWallpaper(returnedData);
    }
    getInfo();
  }, [])

  return (
    <>
      <div className={ styles.wallpaperContainer }>
        <h1 className={ styles.wallpaperTitle }>{ wallpaper?.title }</h1>
        <img className={ styles.wallpaperImage } src={ wallpaper?.url } alt="Author" />
        <a 
          className={ styles.downloadLink }
          download={ `${wallpaper?.id}-wallpaper.jpg` } 
          href={ wallpaper?.url }>
          Download
        </a>
        <div className={ styles.wallpaperAuthor }>{`Author: ${ wallpaper?.author }`}</div>
      </div>  
      <div className={ styles.footer } >
        <Link to="/wallpapers">Wallpapers</Link>
      </div>
    </>
  )
}

export default WallpaperDetails;