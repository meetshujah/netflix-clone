import axios from 'axios';

/* base Url to make requestes to the movie database */
const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
// instance.get('/foo-bar'); its mean https://api.themoviedb.org/3/foo-bar
export default instance;