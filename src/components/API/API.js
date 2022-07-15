const url = 'https://pixabay.com/api/';
const key = '27545952-886edf6444d41f28a84ae17ec';
const perPage = '12'; 

 function fetchImages(imgValue, page) {

// const fetchItem = `${url}?key=${key}&q=${imgValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

return fetch(`${url}?key=${key}&q=${imgValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`).then(data => {
   if(data.ok) {
      return data.json()
   }
   return Promise.reject(new Error('No response from server'));})

}

export default fetchImages;