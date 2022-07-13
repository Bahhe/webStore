// SEARCH BAR CODE 

const navList = document.querySelector('.nav-list')
const searchBar = document.querySelector('.search-bar') 
const searchBtn = document.querySelector('.search-btn')

searchBtn.addEventListener('click', showSearchBar)

function showSearchBar() {
  searchBar.classList.toggle('search-active')
  navList.classList.toggle('search-active')
}


// SLIDER CODE 

const sliderArrowLeft = document.querySelector('.slide-left')
const sliderArrowRight = document.querySelector('.slide-right')
const sliderItems = document.querySelector('.box-container')
const slider = document.querySelectorAll('.products-boxes.slide .box-container')

slider.forEach((slid) => {
  sliderArrowLeft.addEventListener('click', leftSlide)

  let leftSlideCount = 1 

  function leftSlide() {
    const itemWidth = sliderItems.getBoundingClientRect().width
    console.log(itemWidth)
    slid.style.transform = `translateX(${leftSlideCount * itemWidth}px)`
    leftSlideCount++
  }

  
  sliderArrowRight.addEventListener('click', rightSlide)

  let rightSlideCount = 1 

  function rightSlide() {
    const itemWidth = sliderItems.getBoundingClientRect().width
    console.log(itemWidth)
    slid.style.transform = `translateX(-${rightSlideCount * itemWidth}px)`
    rightSlideCount++
  }
})

