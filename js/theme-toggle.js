// ============================================
// DARK/LIGHT THEME TOGGLE - FIXED VERSION
// ============================================

// Prevent multiple initializations
if (!window.themeToggleInitialized) {
    window.themeToggleInitialized = true;
    
    function initThemeToggle() {
        if (window.themeToggleActive) return;
        window.themeToggleActive = true;

        console.log('Initializing theme toggle...');
        
        const themeToggle = document.getElementById('themeToggle');
        
        if (!themeToggle) {
            console.error('Theme toggle button (#themeToggle) not found');
            return;
        }
        
        const themeIcon = themeToggle.querySelector('.header__theme-icon');
        
        if (!themeIcon) {
            console.error('Theme icon (.header__theme-icon) not found');
            return;
        }
        
        const THEME_KEY = 'portfolio-theme';
        
        // ============================================
        // SAFE STORAGE WRAPPER (localStorage + Cookies fallback)
        // ============================================
        const storage = {
            get: (key) => {
                try {
                    // Try localStorage first
                    const item = localStorage.getItem(key);
                    if (item) return item;
                } catch (e) {
                    console.warn('localStorage read failed:', e.message);
                }
                
                // Fallback to cookies
                const name = key + "=";
                const ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i].trim();
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            },
            set: (key, value) => {
                try {
                    // Try localStorage
                    localStorage.setItem(key, value);
                } catch (e) {
                    console.warn('localStorage write failed:', e.message);
                }
                
                // Always set cookie as backup
                const days = 365;
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date.toUTCString();
                document.cookie = key + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
            }
        };
        
        // ============================================
        // ENABLE DARK MODE
        // ============================================
        function enableDarkMode() {
            document.body.classList.add('dark-theme');
            themeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e0e0e0"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>';
            storage.set(THEME_KEY, 'dark');
            console.log('✓ Dark mode enabled');
        }
        
        // ============================================
        // ENABLE LIGHT MODE
        // ============================================
        function enableLightMode() {
            document.body.classList.remove('dark-theme');
            themeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#212121"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>';
            storage.set(THEME_KEY, 'light');
            console.log('✓ Light mode enabled');
        }
        
        // ============================================
        // LOAD SAVED THEME
        // ============================================
        function loadTheme() {
            const savedTheme = storage.get(THEME_KEY);
            console.log('Loaded saved theme:', savedTheme || 'none (defaulting to light)');
            
            if (savedTheme === 'dark') {
                enableDarkMode();
            } else {
                enableLightMode();
            }
        }
        
        // ============================================
        // TOGGLE THEME
        // ============================================
        function toggleTheme(e) {
            // Prevent double firing and event bubbling
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Theme toggle clicked');
            
            if (document.body.classList.contains('dark-theme')) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        }
        
        // ============================================
        // ATTACH EVENT LISTENER (only once)
        // ============================================
        themeToggle.addEventListener('click', toggleTheme);
        
        // ============================================
        // LOAD THEME ON INITIALIZATION
        // ============================================
        loadTheme();
        
        console.log('✓ Theme toggle initialized successfully');
    }
    
    // ============================================
    // INITIALIZE ON DOM READY
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
}