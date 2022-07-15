

 export default async function  fetchImages(imgValue, page) {
const url = 'https://pixabay.com/api/';
const key = '27545952-886edf6444d41f28a84ae17ec';
const perPage = '12'; 
// const fetchItem = `${url}?key=${key}&q=${imgValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

return await fetch(`${url}?q=${imgValue}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`).then(response => {
   if(response.ok) {
      return response.json()
   }
   return Promise.reject(new Error('No response from server'));})

}

