const Apiurl = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function userdata(username) {
    try {
        const { data } = await axios(Apiurl + username)

        createcard(data)
        getRepos(username)
    } catch (error) {
          if (error.response.status == 404) {
             createcarderr('No profile found with this user name')
          }
    }
}

 async function getRepos(username) {
    try {
        const { data } = await axios(Apiurl + username + '/repos?sort=created')

        addRepoTocard(data)
    } catch (error) {
             createcarderr('Problem fetching Repos')
    }
}

function createcard(user) {
     const cardHTML = `
     <div class="card">
     <div>
         <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
     </div>
     <div class="user-info">
         <h2>${user.name}</h2>
         <p>${user.bio}</p>
         <ul>
             <li>${user.followers}<strong>Followers</strong></li>
             <li>${user.following}<strong>Following</strong></li>
             <li>${user.public_repos}<strong>Repos</strong></li>
         </ul>

         <div id="repos"></div>
     </div>
 </div>
     `

     main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        userdata(user)

        search.value = ''
    }
})

function createcarderr(msg) {
    const cardHTML = `
      <div class="card">
         <h1>${msg}</h1>
         </div>
    `

    main.innerHTML = cardHTML
}

function addRepoTocard(repos) {
    const repoEL = document.getElementById('repos')

    repos
         .slice(0, 10)
        .forEach(repo => {
        const reposEL = document.createElement('a')
         reposEL.classList.add('repo')
         reposEL.href = repo.html_url
         reposEL.target = '_blank'
         reposEL.innerText = repo.name

         repoEL.appendChild(reposEL)
    });
}