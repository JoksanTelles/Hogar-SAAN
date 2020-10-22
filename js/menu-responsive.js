const menuClosed = document.getElementById('menu-open');
const menuOpened = document.getElementById('menu-close');
const navigation = document.getElementById('header-navigation');

//Apply the cached theme on reload
menuOpened.onclick = () => {
    navigation.classList.replace('opened', 'closed');
};

menuClosed.onclick = () => {
    navigation.classList.replace('closed', 'opened');
};