const card = document.getElementById("card");
const messageEl = document.getElementById("message");
const music = document.getElementById("bg-music");

// ข้อความอวยพร
const message = "ขอบคุณแม่ที่รักและดูแลโอมเสมอ โอมรักแม่มากที่สุด 💙";


// คลิกการ์ดให้เปิด
card.addEventListener("click", () => {
    card.classList.toggle("open");
    if (!music.paused) return;
    music.play();
    typeMessage(message);
    
    
});

// ฟังก์ชันพิมพ์ข้อความทีละตัว
function typeMessage(text) {
    let i = 0;
    messageEl.textContent = "";
    const interval = setInterval(() => {
        messageEl.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 60);
}

// ดอกมะลิร่วง
const canvas = document.getElementById("jasmine");
const ctx = canvas.getContext("2d");
let flowers = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

for (let i = 0; i < 20; i++) {
    flowers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
        size: 50 + Math.random() * 25
    });
}

const img = new Image();
img.src = "jasmine.png";

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach(f => {
        ctx.drawImage(img, f.x, f.y, f.size, f.size);
        f.y += f.speed;
        if (f.y > canvas.height) {
            f.y = -f.size;
            f.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(draw);
}

draw();
