// SEARCH BAR CODE 

const navList = document.querySelector('.nav-list')
const searchBar = document.querySelector('.search-bar') 
const searchBtn = document.querySelector('.search-btn')

searchBtn.addEventListener('click', showSearchBar)

function showSearchBar() {
  searchBar.classList.toggle('search-active')
  navList.classList.toggle('search-active')
}

// ADDING ITEMS DYNAMICALLLY

// BOXES



for(let i = 1; i <= 10; i++) {

  const boxParents = document.querySelectorAll('.products-boxes')
  boxParents.forEach(boxParent => {
    const boxContainer = document.createElement('div')
    boxContainer.classList.add('box-container')
    boxContainer.innerHTML = `
      <div class="box" style="background-image: url(img/products${i}.jpg);">
                </div>
                <div class="sub-box">
                  <h2 class="product-title">product</h2>
                  <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, non repudiandae dolorem ipsum explicabo nesciunt odio est aliquid distinctio atque!</p>
                  <button class="view">View</button>
                </div>
    `
    boxParent.appendChild(boxContainer)
  })
}

// RAWS


for(let i = 1; i < 10; i++) {
  const rawParents = document.querySelector('.new-arrivals')
  const rawContainer = document.createElement('div')
  rawContainer.classList.add('raws-container')
  rawContainer.innerHTML = `
    <div class="raws-container">
      <div class="raws" style="background-image: url(img/products${i}.jpg);">
      </div>
      <div class="sub-raw">
        <h2 class="product-title">product</h2>
        <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic, natus dolorem nulla voluptatibus, sed, quas blanditiis obcaecati nisi saepe reiciendis fugiat et modi soluta accusantium id numquam iusto deleniti.</p>
        <div class="btn-container">
          <button class="view">View</button>
        </div>
      </div>
    </div>
  `
  rawParents.appendChild(rawContainer)
}

// SLIDER CODE 

const slideContainer = [...document.querySelectorAll('.products-boxes.slide')]
const sliderItems = [...document.querySelectorAll('.box-container')]





const sliderArrowLeft = document.querySelector('.slide-left') 
const sliderArrowRight = document.querySelector('.slide-right') 
const slider = [...document.querySelectorAll('.products-boxes.slide .box-container')]


slideContainer.forEach((item, idx) => {
  const width = item.getBoundingClientRect().width
  sliderArrowRight.addEventListener('click', () => {
    item.scrollLeft += width 
  })

  sliderArrowLeft.addEventListener('click', () => {
    item.scrollLeft -= width 
  })
})