export type WallpaperResponseType = { 
    id: string;
    description: string; 
    urls: { regular: string };
    user: { name: string};
};

export type WallpaperType = { 
    id: string;
    title: string; 
    url: string ;
    author: string;
};