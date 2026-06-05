function showGallery(id) {
    document.getElementById("malak").style.display = "none";
    document.getElementById("lojy").style.display = "none";
    document.getElementById("rahma").style.display = "none";
    document.getElementById("amira").style.display = "none";
    document.getElementById("rowan").style.display = "none";
    document.getElementById("amal").style.display = "none";

    document.getElementById(id).style.display = "grid";
}

document.getElementById("btn-malak").onclick = function () {
    showGallery("malak");
};

document.getElementById("btn-lojy").onclick = function () {
    showGallery("lojy");
};

document.getElementById("btn-rahma").onclick = function () {
    showGallery("rahma");
};

document.getElementById("btn-amira").onclick = function () {
    showGallery("amira");
};

document.getElementById("btn-rowan").onclick = function () {
    showGallery("rowan");
};

document.getElementById("btn-amal").onclick = function () {
    showGallery("amal");
};

// Show Malak when page opens
showGallery("malak");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll("section img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});