const mainContent = document.querySelector('#container');
const navbar = document.querySelector('nav');
const navAction = e => {
    e.preventDefault();
    if(e.target.classList.contains('navbar-item') 
    || e.target.classList.contains('button')){
        const opcion = e.target.innerHTML.trim();

        switch(opcion){
            case 'Home':
                loadData('../pages/home.html');
                break;
            case 'Tabla':
                loadData('../pages/table.html');
                break;
            case 'Log in':
                loadData('../pages/login.html');
                break;
        }
        
    }
}

const loadData = (pageUrl) => {
    fetch(pageUrl)
    .then(page => {
        return page.text();
    })
    .then(contentHtml => {
        if(mainContent.firstChild){
            mainContent.removeChild(mainContent.firstChild);
        }
        const div = document.createElement('div');
        div.innerHTML = contentHtml;
        mainContent.appendChild(div);
    })
}
window.addEventListener('DOMContentLoaded',()=>{
    loadData('../pages/home.html');
    navbar.addEventListener('click', navAction);
})