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
        categoryLi.classList.add('ms-5');
        categoryLi.classList.add('fw-semibold');
        categoryLi.innerHTML = `
        <a class="nav-link active fw-semibold" aria-current="page" onclick="showNewsFeed('${category.category_id}')" >${category.category_name}</a
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
                    <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${news.title}</h5>
                      <p class="card-text">${news.details}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              
        `
        newsFeedDiv.appendChild(cardDiv);
    });
}

