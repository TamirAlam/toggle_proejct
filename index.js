const toggle = document.getElementById('toggle');
const message = document.getElementById('message');
// Event listener for the toggle switch
toggle.addEventListener('change', () => {
    document.body.style.backgroundColor = toggle.checked ? '#000' : '#f0f0f0';
    message.style.color = toggle.checked ? '#fff' : '#212121';
});