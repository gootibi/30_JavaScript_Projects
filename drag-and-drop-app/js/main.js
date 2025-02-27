const draggableElement = document.getElementById("myDraggableElement");

draggableElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", draggableElement.id);
});

for (const dropZone of document.querySelectorAll(".drop-zone")) {
    // When draggable element is over a drop zone
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("drop-zone--over");
    });
    
    // When draggable element no lnoger over drop zone
    dropZone.addEventListener("dragleave", (e) => {
        dropZone.classList.remove("drop-zone--over");
    });

    // When draggable element is dropped onto drop zone
    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();

        document.getElementById("myFileInput").files = e.dataTransfer.files;

        const droppedElementId = e.dataTransfer.getData("text/plain");
        const droppedElement = document.getElementById(droppedElementId);

        dropZone.appendChild(droppedElement);
        dropZone.classList.remove("drop-zone--over");
    });
}