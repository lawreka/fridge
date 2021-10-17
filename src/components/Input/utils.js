export const getRandomPosition = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const top = Math.floor(Math.random() * (height - height * 0.05));
    let left = Math.floor(Math.random() * (width - width * 0.05));
    const menuArea = document.getElementById('menu-wrapper');
    const menuCoords = menuArea.getBoundingClientRect();
    const {
        right: menuRight,
    } = menuCoords;
    if (left < menuRight) {
        left += menuRight;
    }
    return { top, left };
};
