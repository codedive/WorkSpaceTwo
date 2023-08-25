Array.from(document.querySelectorAll('.navigate-btn')).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    };
});