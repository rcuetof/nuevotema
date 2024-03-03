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