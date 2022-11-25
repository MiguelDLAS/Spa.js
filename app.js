const mainContent = document.querySelector('#container');
const navbar = document.querySelector('.navbar');

const loadData = e => {
    e.preventDefault();
    if(e.target.classList.contains('') || e.target.classList.contains('')){
        
    }
}
window.addEventListener('   DOMcontentLoaded',()=>{
    fetch('../page/home.html')
    .then(page => {
        return page.text();

    })
    .then(contentHtml => {
        const div = document.createElement('div');
        div
        console.log(contentHtml);
            mainContent.appendChild(div);
    })
    navbar.addEventListener('click', loadData);
})