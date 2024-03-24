const sidebar = document.querySelector('#sidebar-item')
const sbOpen = document.querySelector('#sb-open')
const sbClose = document.querySelector('#sb-close')

function sbAc(){
    sidebar.style.display = 'block'
    sbOpen.style.display = 'none'
    sbClose.style.display = 'block'
}
function sbBagla(){
    sidebar.style.display = 'none'
    sbOpen.style.display = 'block'
    sbClose.style.display = 'none'
}