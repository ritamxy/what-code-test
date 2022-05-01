import React, { useState } from 'react';
import './App.css';

function App() {
  const [formValue, setFormValue] = useState({
    input: '',
  });

  const submitForm = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="app">
      <header className="app__header">
        <h3 className="text__heading3">Congrats!</h3>
        <p className="text__normal">
          If you're able to start this app, you just passed the first test on
          version control
        </p>
        <p className="text__normal">
          Right now, we just need you to finish this simple todo list feature.
          😊
        </p>
      </header>

      <section className="to-do-list">
        <h3 className="text__heading3">To Do List</h3>
        <form className="to-do-list__form" onSubmit={submitForm}>
          <div className="form__row">
            <label htmlFor="input" className="text__normal">
              New To-Do Item:
            </label>
            <input
              type="text"
              id="input"
              className="to-do-list__input"
              value={formValue.input}
              onChange={({ target: { value } }) =>
                setFormValue((preValue) => ({ ...preValue, input: value }))
              }
            />
            <button type="submit" className="to-do-list__submit">
              Add
            </button>
          </div>
        </form>

        {/* You should render your todo list down here */}
      </section>
    </div>
  );
}

export default App;
