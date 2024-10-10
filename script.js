// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы с классом 'contact-item'
    const contactItems = document.querySelectorAll('.contact-item');
    
    // Устанавливаем атрибут target для открытия в новой вкладке
    contactItems.forEach(item => {
        item.setAttribute('target', '_blank');
    });
});
