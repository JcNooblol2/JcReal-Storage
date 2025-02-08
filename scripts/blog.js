document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.nextElementSibling.innerText;
        navigator.clipboard.writeText(code);
        button.innerText = "Copied!";
        setTimeout(() => button.innerText = "Copy", 1000);
    });
});
document.querySelectorAll('.dumb-a').forEach(button => {
    button.addEventListener('click', () => {
        const url = window.location.href; 
        navigator.clipboard.writeText(url);
        button.innerText = "Copied!";
        setTimeout(() => button.innerText = "Copy", 1000);
    });
});