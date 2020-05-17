import React, { useState, useEffect } from "react";
import { NoteApi, Note, NoteParams } from "../gen/typescript-axios-client";
import { useAuth0 } from "../react-auth0-spa";

// component to manage personal notes
const Notes = () => {
  const { getTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  // get note api configured with current access token
  const getNoteApi = async () => {
    const token = await getTokenSilently();
    return new NoteApi({ accessToken: token });
  };

  // load personal notes
  const loadNotes = async () => {
    setIsLoading(true);
    const noteApi = await getNoteApi();
    const response = await noteApi.listNotes();
    const notes = response.data;
    setNotes(notes);
    setIsLoading(false);
  };

  // update the state note text when the input field changes
  const updateNoteText = (e: any) => {
    setNoteText(e.target.value);
  };

  // create a new note
  const createNote = async () => {
    const params: NoteParams = {
      text: noteText,
    };
    const noteApi = await getNoteApi();
    setIsLoading(true);
    await noteApi.createNote(params);
    loadNotes();
  };

  // delete a note
  const deleteNote = async (id: string) => {
    const noteApi = await getNoteApi();
    setIsLoading(true);
    await noteApi.deleteNote(id);
    loadNotes();
  };

  return (
    <>
      <div className="mt-4 w-50">
        <h3>Create a note</h3>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={updateNoteText}
          />
        </div>
        <button className="btn btn-primary" onClick={createNote}>
          Submit
        </button>
      </div>
      {isLoading && <span className="mt-4">Loading notes...</span>}
      {!isLoading && (
        <>
          <div className="mt-4 w-50">
            <h3>My notes</h3>
            {notes.map((note) => (
              <div key={note.id} className="card my-2">
                <div className="card-body d-flex">
                  <div className="flex-fill">{note.text}</div>
                  <div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Notes;
