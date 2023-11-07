// Animation starts
const imageUrls = [
    'fairy sprite 1.png',
    'fairy sprite 2.png',
    'fairy sprite 3.png',
    'fairy sprite 4.png',
    'fairy sprite 5.png',
    'fairy sprite 6.png',
    'fairy sprite 7.png',
    'fairy sprite 8.png'
    // Add more image URLs as needed
];

const container = document.getElementById('animation-container');
const frame = document.getElementById('animation-frame');
let currentFrame = 0;

function animate() {
    // Update the image source with the next frame
    frame.src = imageUrls[currentFrame];

    // Increment the current frame index
    currentFrame = (currentFrame + 1) % imageUrls.length;
}

// Set the animation interval (e.g., 100 milliseconds)
const animationInterval = 300;
setInterval(animate, animationInterval);

// Animation ends