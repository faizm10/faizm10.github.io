$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1);
    }, 0); 

    return false;
});
function toggleDropdown(id) {
    var list = document.getElementById(id + '-list');
    list.style.maxHeight = (list.style.maxHeight === '0px' || list.style.maxHeight === '') ? list.scrollHeight + 'px' : '0px';
}