
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');

toggleBtn.addEventListener('click', () => {
    sidebar.style.width = '300px';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
});