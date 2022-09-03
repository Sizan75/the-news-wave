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
    .then(data => console.log(data))
}



