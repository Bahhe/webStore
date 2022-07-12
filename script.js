// SEARCH BAR CODE 

const navList = document.querySelector('.nav-list')
const searchBar = document.querySelector('.search-bar') 
const searchBtn = document.querySelector('.search-btn')

console.log(navList,searchBar,searchBtn)

searchBtn.addEventListener('click', showSearchBar)

function showSearchBar() {
  searchBar.classList.toggle('search-active')
  navList.classList.toggle('search-active')
}