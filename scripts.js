function toggleSound(videoId) {
    var video = document.getElementById(videoId);
    var button = video.nextElementSibling; // Assume the button is the next sibling of the video
    if (video.muted) {
        video.muted = false;
        button.textContent = "🔊";
    } else {
        video.muted = true;
        button.textContent = "🔇";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = 'active';
        }
    }
});