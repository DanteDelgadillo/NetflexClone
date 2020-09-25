
const React_App_Key = "f1cbea6e7cfcec49777dc013659da0e0"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${React_App_Key}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${React_App_Key}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${React_App_Key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${React_App_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${React_App_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${React_App_Key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${React_App_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${React_App_Key}&with_genres=99`

}

export default requests;

