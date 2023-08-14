const headers = document.getElementById('Header')
const titles = document.getElementById('Title')
const excerts = document.getElementById('Excert')
const profile_imgs = document.getElementById('Profile-img')
const names = document.getElementById('Name')
const dates = document.getElementById('Date')
const animated_bgs = document.querySelectorAll('animated-bg')
const animated_bgs_texts = document.querySelectorAll('animated-bg-text')

setTimeout(getdata, 2500)

function getdata() {
    headers.innerHTML = '<img src="image/christopher-gower-m_HRfLhgABo-unsplash.jpg" alt="">'
    titles.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerts.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolorem, laudantium.'
    profile_imgs.innerHTML = '<img src="image/vince-veras-AJIqZDAUD7A-unsplash.jpg" alt="">'
    names.innerHTML = 'Becky hunt'
    dates.innerHTML = 'Aug 11, 2023'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))

    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}