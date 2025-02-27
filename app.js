let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let autoSlideInterval;

// ฟังก์ชันสำหรับเลื่อนไปยังภาพที่เลือก
function showSlide(index) {
    slider.scrollTo({
        left: index * slider.clientWidth,
        behavior: 'smooth'
    });
}

// ฟังก์ชันสำหรับลูปภาพโดยอัตโนมัติ
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// ฟังก์ชันเพื่อเริ่มการเปลี่ยนภาพโดยอัตโนมัติ
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 4000);
}

// ฟังก์ชันเพื่อหยุดการเปลี่ยนภาพโดยอัตโนมัติ
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// เริ่มต้นแสดงภาพแรก
showSlide(currentIndex);
startAutoSlide(); // เริ่มการเปลี่ยนภาพโดยอัตโนมัติ

// เพิ่มการจัดการเหตุการณ์เมื่อผู้ใช้โต้ตอบกับสไลเดอร์
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// จัดการการคลิกที่ปุ่มนำทาง
const navLinks = document.querySelectorAll('.slider-nav a');
navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // หยุดการทำงานปกติของ anchor
        stopAutoSlide(); // หยุดการเปลี่ยนภาพโดยอัตโนมัติ
        currentIndex = index; // อัปเดตค่า currentIndex
        showSlide(currentIndex); // แสดงภาพที่เลือก
        
        // เริ่มการเปลี่ยนภาพใหม่หลังจากรอ 10 วินาที
        setTimeout(() => {
            startAutoSlide(); // เริ่มการเปลี่ยนภาพโดยอัตโนมัติอีกครั้ง
        }, 10000); // รอ 10 วินาที (10000 มิลลิวินาที)
    });
});


//////

