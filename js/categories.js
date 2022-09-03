//  load categories  name in li 
const loadCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategoryName(data.data.news_category))
}
//  display categories  name in li 
const displayCategoryName = (categories) =>{
    const categoriesUl =document.getElementById('catagories-ul');
    categories.forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.classList.add('nav-item');
        categoryLi.classList.add('me-4');
        categoryLi.classList.add('ms-4');
        categoryLi.classList.add('fw-semibold');
        categoryLi.innerHTML = `
        <button class="btn btn-light"  onclick="showNewsFeed('${category.category_id}')" >${category.category_name}</button>
        `    
        categoriesUl.appendChild(categoryLi);    
    });
}
// calling loadCategories 
loadCategories();

const showNewsFeed = (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsFeed(data.data))
}

const displayNewsFeed = data =>{
    const newsFeedDiv = document.getElementById('news-feed');
    newsFeedDiv.innerHTML = ''
    data.forEach(news => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card');
        cardDiv.classList.add('mb-3');
        cardDiv.innerHTML = `
        
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${news.thumbnail_url}" class="img-fluid rounded-start"  alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${news.title ? news.title: "Not Found"}</h5>
                      <p class="card-text">${news.details ? news.details.slice(0,300) : "no news details found"}...</p>
                      <div class="d-flex mt-3 justify-content-between me-4 align-items-center">
                      <div class="d-flex ">
                       <img src="${news.author.img ? news.author.img : "Author img not found"}" class="rounded-circle" alt="..." width="42" height="42">
                      <div >
                        <h6>${news.author.name ? news.author.name : "No aouthor name found"}</h6>
                        <p>${news.author.published_date ? news.author.published_date.slice(0,10) : "publish date not found"}</p>
                      </div>
                      </div>
                
                      <h6><i class="fa-sharp fa-solid fa-eye"></i> ${news.total_view ? news.total_view  : "No View"}M</h6>
                      <button class="btn btn-primary " onclick="">Details</button>
                    </div>
                    </div>
                  </div>
                </div>
              
        `
        newsFeedDiv.appendChild(cardDiv);
    });
}

