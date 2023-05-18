const elementList = document.querySelectorAll('.list')
for (const item of elementList) {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active')
    })
}

function removeActive() {
    for (const item of elementList) {
        item.classList.remove('active')
    }
}

const filter = document.querySelector('.filter_btn')
const filterMenu = document.querySelector('.filter_container')
const closeBtn = document.querySelector('.fa-x')
const body = document.querySelector('body')

filter.addEventListener('click', () => {
    filterMenu.style.display = 'flex';
    filterMenu.style.background = '#fff';
    body.style.background = '#b4b4b4'
    searchInput.setAttribute('readonly', 'readonly')

})
closeBtn.addEventListener('click', () => {
    filterMenu.style.display = 'none'
    body.style.background = '#fff'
    searchInput.removeAttribute('readonly')
})

// Ошибка
const mainError = document.querySelector('.main_container')
const searchInput = document.querySelector('.search_input')

const textValue = searchInput.value
if (textValue === '') {
    console.error('Ничего не введено')
}

// // Нужно условие для ошибки....
// // mainError.style.display = 'flex'
// const tryAgain = document.querySelector('.try_again')

// tryAgain.addEventListener('click', () => {
//     mainError.style.display = 'none'
// })
