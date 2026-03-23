document.addEventListener('DOMContentLoaded', () => {
    const avatarContainer = document.querySelector('.avatar-container');

    // Click handle function (Scratch effect ko copy karne ke liye vanilla js)
    const toggleAvatarState = () => {
        if (!avatarContainer.classList.contains('show-samurai')) {
            // Agar normal avatar active hai, samurai par toggle karo
            avatarContainer.classList.add('show-samurai');

            // 1.5 seconds bad wapas original photo par toggle karein
            setTimeout(() => {
                avatarContainer.classList.remove('show-samurai');
            }, 1500); 
        }
    };

    // Desktop ke liye Click event listener
    avatarContainer.addEventListener('click', toggleAvatarState);

    // Mobile ke liye Touch event listener (better response on phone)
    avatarContainer.addEventListener('touchstart', (e) => {
        // Scroll karne par animation trigger na ho, iske liye default behaviour prevent karein
        if (e.touches.length > 1) { 
          return; 
        }
        toggleAvatarState();
    });
});