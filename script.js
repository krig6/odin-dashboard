const toggleTheme = document.querySelector('.bx-sun');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleTheme.classList.toggle('bx-sun');
    toggleTheme.classList.toggle('bxs-moon');
}) 