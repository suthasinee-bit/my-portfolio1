// เลือกปุ่มและ body มาเพื่อทำโหมดมืด
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// เมื่อคลิกปุ่ม ให้เพิ่ม/ลบ คลาส dark-mode ที่ body
toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // เปลี่ยนข้อความบนปุ่ม
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'สลับโหมดสว่าง ☀️';
    } else {
        toggleBtn.textContent = 'สลับโหมดมืด 🌙';
    }
});