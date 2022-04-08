// theme change
const themeChange = document.getElementById('theme-change');
if(localStorage.getItem('theme')===null){
    localStorage.setItem('theme','light');
}
if(localStorage.getItem('theme')==='light'){
    document.body.classList.add('body-dark-theme');
        themeChange.classList.remove('uil-moon');
        themeChange.classList.add('uil-sun');
}
else if (localStorage.getItem('theme')==='dark'){
    document.body.classList.remove('body-dark-theme');
        themeChange.classList.remove('uil-sun');
        themeChange.classList.add('uil-moon');
}
themeChange.addEventListener('click',()=>{
    let theme = localStorage.getItem('theme');
    if(theme==='dark'){
        document.body.classList.add('body-dark-theme');
        themeChange.classList.remove('uil-moon');
        themeChange.classList.add('uil-sun');
        localStorage.setItem('theme','light');
    }else{
        document.body.classList.remove('body-dark-theme');
        themeChange.classList.remove('uil-sun');
        themeChange.classList.add('uil-moon');
        localStorage.setItem('theme','dark');
    }
})