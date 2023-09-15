const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=01bd8167668ff3ad0535e4fd61320716&page=1'
const img_path = 'https://image.tmdb.org/t/p/w1280'
const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=01bd8167668ff3ad0535e4fd61320716&query="'
const form =        document.getElementById('form')
const search =       document.getElementById('search')
const main =          document.getElementById('main')

getmovies(api_url)

async function getmovies(url) {
    const res = await fetch(url)
    const data = await res.json()

     showmovies(data.results)
}

function showmovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview} = movie

        const movieEL = document.createElement('div')
         movieEL.classList.add('movie')

         movieEL.innerHTML = `
         
         <img src="${img_path + poster_path}" alt="${title}">
         <div class="movie-info">
             <h3>${title}</h3>
             <span class="${getclassbyrate(vote_average)}">${vote_average}</span>
         </div>

         <div class="overview">
             <h3>Overview</h3>
             ${overview}
         </div>
         `

        main.appendChild(movieEL)
    })
}

function getclassbyrate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else { 
        return 'red'
    }
}


form.addEventListener('submit',(e) => {
     e.preventDefault()

     const searchterm = search.value

     if (searchterm && searchterm !== '') {
           getmovies(search_api + searchterm)

           search.value = ''
     }
     else {
        window.location.reload()
     }
})