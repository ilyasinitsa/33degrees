const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navigation-links-list');
const header = document.querySelector('header');

let compact;

(window.scrollX > header.offsetHeight) ? compact = true : false;

toggleButton.onclick = () => {
    navbar.classList.toggle('hidden');
    setTimeout(() => {
        navbar.classList.toggle('transparent');
    }, 0);
}

const checkScroll = () => {

    let scrolled = window.scrollY;

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

window.addEventListener('scroll', checkScroll);