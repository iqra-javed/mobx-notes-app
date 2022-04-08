import React, { useState } from 'react';
import { useNotesStore } from './NotesContext';

function NewNoteForm() {
  const [noteText, setNoteText] = useState('');
  const notesStore = useNotesStore();
  return (
    <>
      <input
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        type='text'
      />
      <button onClick={() => notesStore.addNote(noteText)}>Add note</button>
    </>
  );
}

export default NewNoteForm;
