const messages = [
    "La mulți ani! 🎉 (Română)",
    "Happy Birthday! 🎂 (Engleză)",
    "Feliz cumpleaños! 🎈 (Spaniolă)",
    "Joyeux anniversaire! 🎊 (Franceză)",
    "Buon compleanno! 🎁 (Italiană)",
    "Alles Gute zum Geburtstag! 🎂 (Germană)",
    "С Днем Рождения! 🎉 (Rusă)",
    "生日快乐! 🎈 (Chineză)",
    "お誕生日おめでとう! 🎂 (Japoneză)"
];

let clickCount = 0;
const maxClicks = 100;

document.getElementById("btn").addEventListener("click", function() {
    clickCount++;
    const messageElement = document.getElementById("message");
    
    // Schimbă mesajul la fiecare click
    let index = clickCount % messages.length;
    messageElement.textContent = messages[index];
    
    // Poziționarea aleatorie a textului
    messageElement.style.position = 'absolute';
    messageElement.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    messageElement.style.left = Math.random() * (window.innerWidth - 300) + 'px';
    
    // Confetti
    if (clickCount === maxClicks) {
        showConfetti();
    }
    
    // Schimbă pisica după fiecare click
    document.getElementById("cat-img").src = "https://linkul-catre-pisica-pixelata.gif?" + new Date().getTime();
});

// Funcție pentru confetti
function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti");
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }

    // Mesaj personalizat
    alert("100 La mulți ani! 🎉 🎉🎉");
}
