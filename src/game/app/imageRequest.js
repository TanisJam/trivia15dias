import axios from "axios";

async function getImage(searchTerm) {

  const response = await axios.get(`https://expressest.herokuapp.com/trivia/img/${searchTerm}`);
  const data = response.data;
  return data.data;
}

// async function getImage(searchTerm) {
//   const options = {
//     method: "GET",
//     url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
//     params: {
//       q: searchTerm,
//       pageNumber: "1",
//       pageSize: "10",
//       autoCorrect: "true",
//     },
//     headers: {
//       "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
//       "x-rapidapi-key": "aba0c61be2msh82ac72ad6257ab5p118564jsn8b81b15e4344",
//     },
//   };
//   const response = await axios.request(options);
//   const data = response.data;
//   return data.value;
// }

export default getImage;
