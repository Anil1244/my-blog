function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
}

function searchArticles() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        const title = article.querySelector('h3').textContent;
        if (title.toUpperCase().indexOf(filter) > -1) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    });
}

// Simulated data for articles and carousel
document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.querySelector('.articles-container');
    const featuredContainer = document.getElementById('featured');

    // Simulate fetching data
    const articles = [
        { title: 'Understanding AI', content: 'Intro to AI and its implications.' },
        { title: 'The Future of JavaScript', content: 'Trends in JavaScript development.' }
    ];

    articles.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.classList.add('article');
        articleEl.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        articlesContainer.appendChild(articleEl);
        featuredContainer.appendChild(articleEl.cloneNode(true)); // Also add to carousel
    });
});
