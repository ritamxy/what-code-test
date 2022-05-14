import "../App.css";
import React, { useRef, useState } from "react";

const NewTodo: React.FC<{
  onAddTodo: (title: string, content: string) => void;
}> = (props) => {
  const todoTitleInputRef = useRef<HTMLInputElement>(null);

  const todoContentInputRef = useRef<HTMLInputElement>(null);

  const [formValue, setFormValue] = useState({
    inputTitle: "",
    inputContent: "",
  });

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = todoTitleInputRef.current!.value;

    const enteredContent = todoContentInputRef.current!.value;

    if (enteredTitle.trim().length === 0) {
      // throw an error
      return;
    }

    if (enteredContent.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredTitle, enteredContent);

    setFormValue({ inputTitle: "", inputContent: "" });
  };

  return (
    <section className="to-do-list">
      <h3 className="text__heading3">To Do List</h3>
      <form className="to-do-list__form" onSubmit={submitForm}>
        <div className="form__row">
          <label htmlFor="input" className="text__normal">
            Title
          </label>
          <input
            type="text"
            id="input"
            ref={todoTitleInputRef}
            className="to-do-list__input"
            value={formValue.inputTitle}
            onChange={({ target: { value } }) =>
              setFormValue((preValue) => ({ ...preValue, inputTitle: value }))
            }
          />
          <label htmlFor="input" className="text__normal">
            Content
          </label>
          <input
            type="text"
            id="input"
            ref={todoContentInputRef}
            className="to-do-list__input"
            value={formValue.inputContent}
            onChange={({ target: { value } }) =>
              setFormValue((preValue) => ({ ...preValue, inputContent: value }))
            }
          />
          <button type="submit" className="to-do-list__submit">
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewTodo;
