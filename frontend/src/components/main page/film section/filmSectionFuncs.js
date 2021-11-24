export const getMovies = async () => {
  //fetching imdB API for top 100 movies
  const randomMovies = await fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": '8131f2e812msh165d8de4e6e7e76p135e8djsn9ec512f1783d'
    }
  })
  const data = await randomMovies.json();
  //modifying the array to contain only movies' ids
  let moviesId = data.map((el) => el.replace('/title/', '').replace('/', ''));
  console.log('moviesId: ', moviesId);
  
  let newArr = [];
  for (let i = 0; i < moviesId.length - 96; i++) {
    //fetching Movie Database API for the info on 4 current most popular movies
    let movies = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${moviesId[i]}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": '8131f2e812msh165d8de4e6e7e76p135e8djsn9ec512f1783d'
      }
    })
    const data = await movies.json();
    console.log('dataaa=>>', data)
    newArr.push(data);
    // console.log('images aarr =>>>>', imagesArr)
  }
  console.log('newarrr=>', newArr)
  // setImagesArr(newArr);
  return newArr;
}