import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, handleDeleteNote, text, date }) => {
  return (
    <div className="note">
      <span> {text}</span>
      <div className="note-footer">
        <small>{date}</small>

        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          //   onClick={() => handleDeleteNote(id)} // Closing parenthesis added here
          className="delete-icon"
          size="1.3rem"
        />
      </div>
    </div>
  );
};

export default Note;
