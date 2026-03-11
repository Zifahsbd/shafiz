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

    // ABOUT Modal Logic
    const aboutBtn = document.getElementById('about-btn');
    const modalOverlay = document.getElementById('about-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const langToggleBtn = document.getElementById('lang-toggle');
    const aboutEn = document.getElementById('about-en');
    const aboutBn = document.getElementById('about-bn');
    const aboutTitle = document.getElementById('about-title');

    if (aboutBtn && modalOverlay && closeModalBtn) {
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        closeModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; 
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = ''; 
            }
        });
        
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                if (aboutEn.style.display === 'none') {
                    // Switch to English
                    aboutEn.style.display = 'block';
                    aboutBn.style.display = 'none';
                    aboutTitle.textContent = 'About Me';
                    langToggleBtn.textContent = 'Bangla';
                } else {
                    // Switch to Bangla
                    aboutEn.style.display = 'none';
                    aboutBn.style.display = 'block';
                    aboutTitle.textContent = 'আমার সম্পর্কে';
                    langToggleBtn.textContent = 'English';
                }
            });
        }
    }
});
