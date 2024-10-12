document.querySelector('.accept-btn').addEventListener('click', function() {
    alert('You accepted the order!');
});

document.querySelector('.reject-btn').addEventListener('click', function() {
    alert('You rejected the order.');
});

// Play audio when 'শুনুন' button is clicked
document.querySelector('.audio-btn').addEventListener('click', function() {
    let audio = new Audio('./Sounds/consent.mp3'); // Replace with actual audio file URL
    audio.play();
});
