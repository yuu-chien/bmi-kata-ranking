// 第四名之後的卡片
// 點擊箭頭後 slider down 詳細資訊
let showTarget = document.querySelector('[data-target]');
showTarget.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('[data-target-ico]').classList.toggle('is-active');
    document.querySelector('[data-panel]').classList.toggle('is-active');
});