import {action, makeObservable, observable} from 'mobx';

class Notes {
  notes = [];
  constructor() {
    makeObservable(
      this,
      {
        addNote: action,
        deleteNote: action,
        notes: observable,
      },
      {autoBind: true},
    );
  }
  addNote(note) {
    this.notes = [...this.notes, {...note, id: Math.random()}];
  }
  deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}

export default notesStore = new Notes();
