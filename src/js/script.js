document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const loadPage = (page) => {
        fetch(`component/${page}.html`)
        .then(response => response.text())
        .then(data => content.innerHTML = data)
        .catch(err => content.innerHTML = '<p>Page not found.</p>')
    }
    loadPage('home');

    document.querySelectorAll('ul.nav-ul > li > a').forEach(link => {
        link.addEventListener('click', (event) => {
            const page = event.target.getAttribute('data-page');
            console.log(page);
            
            loadPage(page);
        })
    });
});