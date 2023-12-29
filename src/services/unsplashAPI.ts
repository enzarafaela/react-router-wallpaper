import { WallpaperResponseType } from "../types/wallpaperType";

export const fetchWallpapersUnsplash = async (page: number) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?client_id=1Y_R3UfmOuQlbnS2HtVnKRnOuhZzncEfgMEv1ko33Fo&query=wallpapers&page=${page}&per_page=5`);

    const data = await response.json();
    const unsplashWallpapers = data.results.map((result: WallpaperResponseType) => {
        return {
            id: result.id,
            title: result.description,
            url: result.urls.regular,
            author: result.user.name
        }
    });

    return unsplashWallpapers;
}

export async function fetchSingleWallpaper (term: string | undefined) {
    const response = await fetch(`https://api.unsplash.com/photos/${term}?client_id=1Y_R3UfmOuQlbnS2HtVnKRnOuhZzncEfgMEv1ko33Fo`);

    const data = await response.json();

    return {
        id: data.id,
        title: data.description,
        url: data.urls.regular,
        author: data.user.name
    };
}