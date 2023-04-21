const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navigation-links-list');
const header = document.querySelector('header');
const mobileMenu = document.querySelector('.mobile-menu');

let compact;

((window.scrollX > header.offsetHeight) || window.innerWidth < 992) ? compact = true : false;

const checkScroll = () => {

    let scrolled = window.scrollY;
    console.log(scrolled)

    if (scrolled > header.offsetHeight) {
        header.classList.add('desktop-compact');

        if (!compact) {
            navbar.classList.add('hidden');
            navbar.classList.add('transparent');
            navbar.classList.toggle('desktop-compact');
            compact = true;
        }

        toggleButton.classList.remove('hidden');

    } else if (scrolled <= header.offsetHeight) {
        header.classList.remove('desktop-compact');

        if (compact) {
            navbar.classList.remove('hidden');
            navbar.classList.remove('transparent');
            navbar.classList.toggle('desktop-compact');
            compact = false;
        }

        toggleButton.classList.add('hidden');
    }  
}

if (window.innerWidth > 992) {
    window.addEventListener('scroll', checkScroll);
} else {
    header.classList.add('mobile');

    navbar.classList.add('hidden');
    navbar.classList.add('transparent');

    toggleButton.classList.remove('hidden');
    toggleButton.classList.add('mobile');
}

toggleButton.onclick = () => {
    toggleButton.classList.toggle('active');
    
    if (!toggleButton.classList.contains('mobile')) {
        navbar.classList.toggle('hidden');
        setTimeout(() => {
            navbar.classList.toggle('transparent');
        }, 0);
    } else {
        mobileMenu.classList.toggle('hidden');
    }
}