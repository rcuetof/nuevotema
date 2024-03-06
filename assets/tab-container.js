function changeTab(tabNumber) {
    // Obtiene el contenido de la pestaña seleccionada
    var selectedTabContent = document.getElementById("content" + tabNumber);
    
    // Verifica si el contenido está visible
    var isTabVisible = window.getComputedStyle(selectedTabContent).display !== "none";
    
    // Oculta todos los contenidos
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    // Muestra el contenido de la pestaña seleccionada solo si no estaba visible previamente
    if (!isTabVisible) {
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

function event(EventNumber) {
    // Obtiene el contenido de la pestaña seleccionada
    var selectedEventContent = document.getElementById("event" + EventNumber);
    
    // Verifica si el contenido está visible
    var isEventVisible = window.getComputedStyle(selectedEventContent).display != "none";
    
    // Oculta todos los contenidos
    var EventContents = document.getElementsByClassName("event-content");
    for (var i = 0; i < tabContents.length; i++) {
        EventContents[i].style.display = "none";
    }
    
    // Muestra el contenido de la pestaña seleccionada solo si no estaba visible previamente
    if (!isEventVisible) {
        selectedTabContent.style.display = "block";
    }
}

// Agrega eventos para el desplazamiento con el mouse
var EventContainer = document.getElementById("Events");
EventContainer.addEventListener("mousedown", function (event) {
    isMouseDown = true;
    initialX = event.clientX;
});

EventContainer.addEventListener("mouseup", function () {
    isMouseDown = false;
});
