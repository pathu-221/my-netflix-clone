const API_KEY = '54556fe957be35d9497d80059e148322';
const API_URL = 'https://api.themoviedb.org/3';
const backdrop_sizes = ["w300","w780","w1280","original"];
const poster_sizes = ["w92","w154","w185","w342","w500","w780","original"];

export const BASE_URL = 'https://image.tmdb.org/t/p';

export function truncate(str, n){
    return str?.length > n ?str.substr(0, n - 1) + '...' : str;
};

export const getTrendingMovies = () => {
    return fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
}

const urls = [
    `${API_URL}/discover/tv?api_key=${API_KEY}&sort_by=release_date.asc&with_networks=213&first_air_date.gte=2017-05-01&include_null_first_air_dates=true`,
    `${API_URL}/discover/tv?api_key=${API_KEY}&sort_by=release_date.asc&with_networks=213&first_air_date.gte=2017-05-01&include_null_first_air_dates=true`
]

export const getNetflixOriginals = () => {
    return fetch(`${API_URL}/discover/tv?api_key=${API_KEY}&sort_by=release_date.desc&with_networks=213&first_air_date.gte=2017-05-01&include_null_first_air_dates=true&page=2`)
    .then(response => response.json())
}

export const getMovies = (type) => {
    return fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${type}&with_watch_monetization_types=flatrate`)
    .then(response => response.json())
}

//https://api.themoviedb.org/3/discover/movie?api_key=54556fe957be35d9497d80059e148322&language=en-US
//&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action
//&with_watch_monetization_types=flatrate





const data =    {
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
}






















//&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&
//with_companies=Netflix&with_watch_monetization_types=flatrate&with_status=0&with_type=0
//https://api.themoviedb.org/3/discover/tv?api_key=54556fe957be35d9497d80059e148322
//sort_by=release_date.asc&with_networks=213&first_air_date.gte=2017-05-01&include_null_first_air_dates=true