const imgs = document.querySelectorAll('.content')
const navItems =  document.querySelectorAll('nav ul li')

navItems.forEach((item, indx) => {
    item.addEventListener('click', () => {
        hideAllImages()
        hideAllNavItems()

        item.classList.add('active')
        imgs[indx].classList.add('show')
    })
})

function hideAllImages() {
    imgs.forEach(img => img.classList.remove('show'))
}

function hideAllNavItems() {
    navItems.forEach(item => item.classList.remove('active'))
}
