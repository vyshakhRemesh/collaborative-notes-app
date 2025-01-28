import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlice";
import Note from "../components/Note";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  // Example of adding a note (you can replace it with actual logic later)
  useEffect(() => {
    dispatch(
      addNote({
        id: 1,
        title: "My first note",
        content: "This is the content of my first note.",
      })
    );
  }, [dispatch]);

  return (
    <div>
      <h2>Notes</h2>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
