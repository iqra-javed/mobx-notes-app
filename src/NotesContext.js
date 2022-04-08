import { useLocalObservable } from 'mobx-react';
import React from 'react';
import { createNotesStore } from './notesStore';

const NotesContext = React.createContext(null);

export const NotesProvider = ({ children }) => {
  const notesStore = useLocalObservable(createNotesStore);
  return (
    <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => React.useContext(NotesContext);
