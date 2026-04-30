// 確保當文件載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Personal Website MVP Loaded!");

    // 可以在這裡加入簡單的捲動偵測
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
});