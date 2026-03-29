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

    // AI Tools Modal Logic
    const aiToolsBtn = document.getElementById('ai-tools-btn');
    const aiToolsModal = document.getElementById('ai-tools-modal');
    const closeAiToolsBtn = document.getElementById('close-ai-tools');

    if (aiToolsBtn && aiToolsModal && closeAiToolsBtn) {
        aiToolsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aiToolsModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        closeAiToolsBtn.addEventListener('click', () => {
            aiToolsModal.classList.remove('active');
            document.body.style.overflow = ''; 
        });

        aiToolsModal.addEventListener('click', (e) => {
            if (e.target === aiToolsModal) {
                aiToolsModal.classList.remove('active');
                document.body.style.overflow = ''; 
            }
        });
    }

    // BG Remove Modal Logic
    const bgRemoveBtn = document.getElementById('bg-remove-btn');
    const bgRemoveModal = document.getElementById('bg-remove-modal');
    const closeBgRemoveBtn = document.getElementById('close-bg-remove');

    if (bgRemoveBtn && bgRemoveModal && closeBgRemoveBtn) {
        bgRemoveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            bgRemoveModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        closeBgRemoveBtn.addEventListener('click', () => {
            bgRemoveModal.classList.remove('active');
            document.body.style.overflow = ''; 
        });

        bgRemoveModal.addEventListener('click', (e) => {
            if (e.target === bgRemoveModal) {
                bgRemoveModal.classList.remove('active');
                document.body.style.overflow = ''; 
            }
        });
    }

    // BG Remove Tool functionality
    const uploadBox = document.getElementById('upload-box');
    const galleryBtn = document.getElementById('gallery-btn');
    const cameraBtn = document.getElementById('camera-btn');
    const bgRemoveInput = document.getElementById('bg-remove-input');
    const uploadText = document.querySelector('.bg-remove-app .upload-text');
    const uploadSubtext = document.querySelector('.bg-remove-app .upload-subtext');

    if (uploadBox && bgRemoveInput) {
        const triggerUpload = () => bgRemoveInput.click();
        uploadBox.addEventListener('click', triggerUpload);
        if (galleryBtn) galleryBtn.addEventListener('click', triggerUpload);
        if (cameraBtn) {
            cameraBtn.addEventListener('click', () => {
                bgRemoveInput.setAttribute('capture', 'environment');
                bgRemoveInput.click();
                setTimeout(() => bgRemoveInput.removeAttribute('capture'), 500);
            });
        }

        bgRemoveInput.addEventListener('change', async (e) => {
            if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];
                if (uploadText) uploadText.textContent = "Removing Background... ✨";
                if (uploadSubtext) uploadSubtext.textContent = "Processing " + file.name;
                
                try {
                    const formData = new FormData();
                    formData.append('image_file', file);
                    formData.append('size', 'auto');
                    
                    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                        method: 'POST',
                        headers: {
                            'X-Api-Key': 'r6YdTAMU2pjmm6kgZXyEaY9p'
                        },
                        body: formData
                    });

                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error((errorData.errors && errorData.errors[0].title) ? errorData.errors[0].title : "API error occurred");
                    }

                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);
                    
                    const resultImage = document.getElementById('result-image');
                    const uploadContent = document.getElementById('upload-content');
                    const mainActionBtns = document.getElementById('main-action-buttons');
                    const resultActionBtns = document.getElementById('result-action-buttons');
                    
                    if(resultImage && uploadContent) {
                        resultImage.src = url;
                        resultImage.style.display = 'block';
                        uploadContent.style.display = 'none';
                        document.getElementById('upload-box').style.border = 'none';
                        document.getElementById('upload-box').style.background = 'transparent';
                    }
                    if(mainActionBtns && resultActionBtns) {
                        mainActionBtns.style.display = 'none';
                        resultActionBtns.style.display = 'flex';
                    }

                    const downloadBtn = document.getElementById('download-btn');
                    if(downloadBtn) {
                        downloadBtn.onclick = () => {
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'removed_bg.png';
                            a.click();
                        };
                    }
                    
                    const resetBtn = document.getElementById('reset-btn');
                    if(resetBtn) {
                        resetBtn.onclick = (ev) => {
                            ev.stopPropagation(); // prevent clicking upload-box
                            bgRemoveInput.value = '';
                            resultImage.style.display = 'none';
                            uploadContent.style.display = 'flex';
                            uploadText.textContent = "Tap to Upload Image";
                            uploadSubtext.textContent = "JPG, PNG, WEBP - Max 12MB";
                            mainActionBtns.style.display = 'flex';
                            resultActionBtns.style.display = 'none';
                            document.getElementById('upload-box').style.border = '2px dashed #303240';
                            document.getElementById('upload-box').style.background = '#161821';
                        };
                    }
                } catch(error) {
                    console.error("BG remove failed:", error);
                    if (uploadText) uploadText.textContent = "Error occurred ❌";
                    if (uploadSubtext) uploadSubtext.textContent = error.message.substring(0,40);
                    setTimeout(() => {
                        uploadText.textContent = "Tap to Upload Image";
                        uploadSubtext.textContent = "JPG, PNG, WEBP - Max 12MB";
                    }, 4000);
                }
            }
        });
    }

    // CONTACT Modal Logic
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeContactBtn = document.getElementById('close-contact');
    const contactForm = document.getElementById('contact-form');
    const contactSubmit = document.getElementById('contact-submit');
    const contactStatus = document.getElementById('contact-status');

    if (contactBtn && contactModal && closeContactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        closeContactBtn.addEventListener('click', () => {
            contactModal.classList.remove('active');
            document.body.style.overflow = ''; 
        });

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
                document.body.style.overflow = ''; 
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            if (contactSubmit) {
                contactSubmit.textContent = 'SENDING...';
                contactSubmit.disabled = true;
            }

            try {
                // Send to Gmail via FormSubmit.co
                const emailResponse = await fetch(`https://formsubmit.co/ajax/trickgro@gmail.com`, {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message,
                        _subject: `New Portfolio Message from ${name}!`
                    })
                });

                if (emailResponse.ok) {
                    contactStatus.textContent = 'Message sent directly to my Gmail!';
                    contactStatus.className = 'contact-status status-success';
                    contactForm.reset();
                } else {
                    contactStatus.textContent = 'Failed to send message.';
                    contactStatus.className = 'contact-status status-error';
                }
            } catch (error) {
                contactStatus.textContent = 'Network error. Please try again later.';
                contactStatus.className = 'contact-status status-error';
            } finally {
                if (contactSubmit) {
                    contactSubmit.textContent = 'SEND MESSAGE';
                    contactSubmit.disabled = false;
                }
            }
        });
    }
});
