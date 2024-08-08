const typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'Programmer'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true,
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tabBtn');
    const tabContents = document.querySelectorAll('.tabContent');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all tab buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

});
