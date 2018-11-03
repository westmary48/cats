import axios from 'axios';

// const getCats = () =>
// return new Promise ((resolve, reject) => {
//     axios.get('https://random-dogs-api.herokuapp.com/cats/15')
//     .then((data) => {
//         resolve(data);
//     })
//     .catch((err) => {
//         reject(err);
//     })
// }

const getCats = () => axios.get('https://random-dogs-api.herokuapp.com/cats/15');

export default getCats;
