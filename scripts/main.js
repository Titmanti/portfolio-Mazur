// Main btns of sidebar
var btnAbout = document.getElementById('about-btn');
var btnWorks = document.getElementById('works-btn');
var btnService = document.getElementById('service-btn');

// Social media btns of sidebar
var btnInstagram = document.getElementById('instagram-btn');
var btnTelegram = document.getElementById('telegram-btn');
var btnCallme = document.getElementById('call-me-btn');

// Sidebar btns
var btnsSide = document.querySelectorAll('#btn-toggle-bar');
// Sidebar
var aSidebar = document.getElementById('sidebar');
// Dark cover
var darkCover = document.getElementById('dark-cover');

//main
var mainPanel = document.querySelector('main');

const instagramUrl = 'https://www.instagram.com/sash_verse';
const telegramUrl = 'https://t.me/sashamazur19';

btnsSide.forEach(btn => {
    btn.onclick = function() {
        console.log('SideBtn click');
        toggleSideBar();
    };
});

function toggleSideBar() {
    aSidebar.classList.toggle('hidden');
    darkCover.classList.toggle('hidden');
};

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 1024) { 
        aSidebar.classList.add('hidden');
        darkCover.classList.add('hidden');
        console.log('Width is lower or equal to 1024px');
    } else {
        console.log('Width is greater than 1024px');
    }
});

// Go to about
document.addEventListener('keydown', function(event) {
if (event.key === '1') {
    btnAbout.classList.add('Pushed');
    btnAbout.classList.add('Active');
    btnWorks.classList.remove('Active');
    btnService.classList.remove('Active');
    loadAbout()
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '1') {
        btnAbout.classList.remove('Pushed');
    }
});

btnAbout.addEventListener('mousedown', function() {
    btnAbout.classList.add('Pushed');
    btnAbout.classList.add('Active');
    btnWorks.classList.remove('Active');
    btnService.classList.remove('Active');
    loadAbout()
});

btnAbout.addEventListener('mouseup', function() {
    btnAbout.classList.remove('Pushed');
});

// Go to works
document.addEventListener('keydown', function(event) {
    if (event.key === '2') {
        btnWorks.classList.add('Pushed');
        btnWorks.classList.add('Active');
        btnAbout.classList.remove('Active');
        btnService.classList.remove('Active');
        loadWorks();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '2') {
        btnWorks.classList.remove('Pushed');
    }
    });

btnWorks.addEventListener('mousedown', function() {
    btnWorks.classList.add('Pushed');
    btnWorks.classList.add('Active');
    btnAbout.classList.remove('Active');
    btnService.classList.remove('Active');
    loadWorks();
});

btnWorks.addEventListener('mouseup', function() {
    btnWorks.classList.remove('Pushed');
});

// Go to service
document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
        btnService.classList.add('Pushed');
        btnService.classList.add('Active');
        btnAbout.classList.remove('Active');
        btnWorks.classList.remove('Active');
        loadServices();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '3') {
        btnService.classList.remove('Pushed');
    }
});

btnService.addEventListener('mousedown', function() {
    btnService.classList.add('Pushed');
    btnService.classList.add('Active');
    btnAbout.classList.remove('Active');
    btnWorks.classList.remove('Active');
    loadServices();
});

btnService.addEventListener('mouseup', function() {
    btnService.classList.remove('Pushed');
});

// Open Instagram
btnInstagram.addEventListener('click', function() {
    console.log('Going to Instagram page...');
    window.open(instagramUrl, '_blank');
});

document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
        console.log('Going to Instagram page...');
        window.open(instagramUrl, '_blank');
    }
});

// Open Telegram
btnTelegram.addEventListener('click', function() {
    console.log('Going to Telegram page...');
    window.open(telegramUrl, '_blank');
});

document.addEventListener('keydown', function(event) {
    if (event.key === '5') {
        console.log('Going to Telegram page...');
        window.open(telegramUrl, '_blank');
    }
});

// Call Oleksandra
btnCallme.addEventListener('click', function() {
    console.log('Calling Oleksandra...');
    window.location.href = `tel:+48577456183`;
});

document.addEventListener('keydown', function(event) {
    if (event.key === '6') {
        console.log('Calling Oleksandra...');
        window.location.href = `tel:+48577456183`;
    }
});

function loadAbout(){
    mainPanel.innerHTML = '';  // Очищаем mainPanel перед добавлением нового контента
    mainPanel.innerHTML = `
        <div id="btn-toggle-bar">
            <i class="bi bi-list"></i>
        </div>

        <p class="title light-text">Hello, I'm Oleksandra Mazur</p>
        <p class="title light-text">I'm your <span class="dark-text">Content Creator</span></p>
        <p class="subtitle dark-text">Capture, Edit, Completed - let's create and distribute only quality content.</p>
        <p class="subtitle dark-text">We're in favor of quality content...</p>

        <div class="wrapper">
            <div class="container-post">
                <img src="images/item1.png" alt="Item1">
                <div class="text-container">
                    <div class="post-text">
                        <span class="post-title">Content filming</span>
                        <span class="post-subtitle">Video shooting, photo shooting, editing, design.</span>
                    </div>
                    <div class="post-price">
                        100Zl
                    </div>
                </div>
            </div>
            <div class="container-post">
                <img src="images/item2.png" alt="Item2">
                <div class="text-container">
                    <div class="post-text">
                        <span class="post-title">Profile design</span>
                        <span class="post-subtitle">Video shooting, photo shooting, editing, design.</span>
                    </div>
                    <div class="post-price">
                        125Zl
                    </div>
                </div>
            </div>
        </div>

        <p class="subtitle dark-text">Let's be together only for the best ideas and the best realisation.</p>
        <p class="subtitle dark-text">I'll be happy to work with you.</p>
        <br><br>
        <p class="subtitle light-text">I am expanding every day, you can contact me in the menu by Instagram, Telegram or Call me.</p>
    `;
}

function loadWorks() {
    // Проверяем, что элемент mainPanel существует на странице
    if (mainPanel) {
        mainPanel.innerHTML = '';  // Очищаем mainPanel перед добавлением нового контента
        mainPanel.innerHTML = `
            <div id="btn-toggle-bar">
                <i class="bi bi-list"></i>
            </div>

            <p class="title light-text">Here you can find examples of my work</p>
        `;
    } else {
        console.error('mainPanel not found on the page');
    }
}
function loadServices() {
    // Проверяем, что элемент mainPanel существует на странице
    if (mainPanel) {
        mainPanel.innerHTML = '';  // Очищаем mainPanel перед добавлением нового контента
        mainPanel.innerHTML = `
            <div id="btn-toggle-bar">
                <i class="bi bi-list"></i>
            </div>

            <p class="title light-text">Services for you</p>
        `;
    } else {
        console.error('mainPanel not found on the page');
    }
}
