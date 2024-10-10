// Если нужно будет добавить какие-то скрипты, можно вставить их сюда.
// Например, можно сделать, чтобы ссылки открывались в новой вкладке.
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.setAttribute('target', '_blank');
});
