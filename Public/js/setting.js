const lightBackground = "../videos/dark_tech.mp4"
const darkBackground = "../videos/white_tech.mp4"
const backgroundVideo = document.getElementById("backgroundVideo")

document.querySelector('.home_btn').addEventListener('click', function() {
    window.location.href = 'main_interface.html';
});

const theme = localStorage.getItem("theme")
if (theme) {
    if (theme === "dark-mode") {
        if (!document.body.classList.contains("dark-mode")) {
            document.body.classList.add("dark-mode")
        }
        backgroundVideo.src = darkBackground

    } else if (theme === "light-mode") {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode")
        }
        backgroundVideo.src = lightBackground
    }
}

function showYourChoice() {
    document.querySelector('.your-choice-section').style.display = 'block';
}