import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);


// import NotesAPI from "./NotesAPI.js";
// import NotesView from "./NotesView.js";

// Get all notes
// NotesAPI.saveNote({
//     id: 583914,
//     title: "New Note!bbbbbbbbbbbbbbbbbbbbbb",
//     body: "I am a new note."
// });

// Delete a note by ID
// NotesAPI.deleteNote(182713);

// const app = document.getElementById("app");
// const view = new NotesView(app, {
//     onNoteAdd() {
//         console.log("Lets add a new note");
//     },

//     onNoteSelect(id) {
//         console.log("Note selected: " + id);
//     },
//     onNoteDelete(id) {
//         console.log("Note delete: " + id);
//     },

//     onNoteEdit(newTitle, newBody) {
//         console.log(newTitle, newBody);
//     },
// });

// const notes = NotesAPI.getAllNotes();

// view.updateNotesList(notes);
// view.updateActiveNotes(notes[0]);

// console.log(NotesAPI.getAllNotes());