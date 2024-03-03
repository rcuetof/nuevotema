function changeTab(tabNumber) {
    // Oculta todos los contenidos
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Muestra el contenido de la pestaña seleccionada
    var selectedTabContent = document.getElementById("content" + tabNumber);
    if (selectedTabContent) {
        selectedTabContent.style.display = "block";
    }
}

// Variables para el desplazamiento con el mouse
var isMouseDown = false;
var initialX = 0;

// Agrega eventos para el desplazamiento con el mouse
var tabContainer = document.getElementById("tabContainer");
tabContainer.addEventListener("mousedown", function (event) {
    isMouseDown = true;
    initialX = event.clientX;
});

tabContainer.addEventListener("mouseup", function () {
    isMouseDown = false;
});

tabContainer.addEventListener("mousemove", function (event) {
    if (isMouseDown) {
        var delta = initialX - event.clientX;
        tabContainer.scrollLeft += delta;
        initialX = event.clientX;
    }
});