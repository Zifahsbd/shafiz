document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 80);
    });

    const memphisBoxes = document.querySelectorAll('.bg-memphis.hover-invert');
    memphisBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            const deg = Math.floor(Math.random() * 30) - 15;
            box.style.transform = `rotate(${deg}deg) scale(1.05)`;
            box.style.zIndex = '10';
        });
        box.addEventListener('mouseout', () => {
            box.style.transform = 'rotate(0deg) scale(1)';
            box.style.zIndex = '1';
        });
    });
});
