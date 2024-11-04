document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        if (content && content.classList.contains('faq-content')) {
            item.classList.toggle('active');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});
