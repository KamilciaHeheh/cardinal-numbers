                                        document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    const textDisplay = document.querySelector('.text-display');
    const sessionCodeElement = document.getElementById('sessionCode');

    function generateSessionCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            code += chars[randomIndex];
        }
        sessionCodeElement.innerHTML = `${code}`;
    }

    generateSessionCode();

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const text = item.getAttribute('data-text');
            textDisplay.innerHTML = text;
            items.forEach(i => i.classList.remove('highlighted'));
            item.classList.add('highlighted');
        });
    });
});
 
                        
