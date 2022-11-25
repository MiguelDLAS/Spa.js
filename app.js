const mainContent = document.querySelector('#container');

window.addEventListener('   DOMcontentLoaded',()=>{
    fetch('../page/home.html')
    .then(page => {
        const div = document.createElement('div');
        console.log(page);
    })
    .then(contentHtml => {
        const div = document.createElement('div');
        console.log(contentHtml);
            mainContent.appendChild(div);
    })
})