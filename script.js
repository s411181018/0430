document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Winnie's Portfolio Loaded.");

    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // 向下捲動時，變成稍微透明的米白底色，並加上淡淡的陰影
            navbar.style.background = 'rgba(247, 246, 241, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
            navbar.style.backdropFilter = 'blur(5px)';
        } else {
            // 回到頂部時，恢復透明
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'none';
        }
    });
});
