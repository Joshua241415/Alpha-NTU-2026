// 1. 平滑捲動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. 地圖彈窗
const mapModal = document.getElementById('mapModal');
const openMapBtn = document.getElementById('openMapBtn');
const closeBtn = document.querySelector('.close-btn');

openMapBtn.onclick = () => mapModal.style.display = 'block';
closeBtn.onclick = () => mapModal.style.display = 'none';

// 3. 相簿燈箱
const lightbox = document.getElementById('lightbox');
const imgFull = document.getElementById('imgFull');
const closeLb = document.querySelector('.close-lb');

document.querySelectorAll('.photo-item img').forEach(img => {
    img.onclick = () => {
        lightbox.style.display = 'block';
        imgFull.src = img.src;
    };
});

closeLb.onclick = () => lightbox.style.display = 'none';

// 4. 通用關閉
window.onclick = (e) => {
    if (e.target == mapModal) mapModal.style.display = 'none';
    if (e.target == lightbox) lightbox.style.display = 'none';
};

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        mapModal.style.display = 'none';
        lightbox.style.display = 'none';
    }
});