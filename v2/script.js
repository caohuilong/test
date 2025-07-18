const loveWords = [
    "亲爱的，遇见你是我最美的意外。",
    "希望我的每一天都有你在身边。",
    "你笑的样子，是我见过最美的风景。",
    "我喜欢你，从心动到古稀。",
    "愿与你共度每一个春夏秋冬。",
    "你是我此生最温柔的坚持。",
    "有你在，世界都变甜了。",
    "我想牵着你的手，走完余生的路。",
    "你是我最爱的女孩，我愿永远守护你。"
];

let idx = 0;
const p = document.getElementById('loveWords');
const btn = document.getElementById('showMore');

btn.onclick = function() {
    idx = (idx + 1) % loveWords.length;
    p.innerText = loveWords[idx];
};

// 网易云音乐 iframe 自动播放提示
window.onload = function() {
    // 有些浏览器会阻止自动播放，需要用户首次点击页面
    // 可以弹窗提示用户点击播放
    setTimeout(function(){
        alert('如果没有自动播放音乐，请点击页面任意位置或播放器播放按钮哦~');
    }, 1500);
};