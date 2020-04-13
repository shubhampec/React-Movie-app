import axios from 'axios';

const instance=axios.create(
    {
        baseURL:'https://api.themoviedb.org/3/movie/upcoming?api_key=3a4e364b2b2ec5badbc70a16037d000e&language=en-US'
    }
)

export default instance;