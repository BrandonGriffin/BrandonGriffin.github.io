function showFullSection(sectionId) {
    var section = document.getElementById(sectionId);
    var mainPage = document.getElementById("main");
    section.style.display = "block";
    mainPage.style.display = "none";
}

function hideFullSection(sectionId) {
    var section = document.getElementById(sectionId);
    var mainPage = document.getElementById("main");
    section.style.display = "none";
    mainPage.style.display = "block";
}