// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sections =>{
        let top = window.scrollY;
        let offset = sections.offsetTop - 100;
        let height = sections.offsetHeight;
        let id = sections.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            sections.classList.add('show-animate');
        }
        else {
            sections.classList.remove('header');
        }
    });




    // sticky header
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation footer on scroll

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate' , this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);

}