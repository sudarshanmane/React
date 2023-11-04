import { useState } from "react";

export default function EditProfile() {
  const [state, setState] = useState({
    editable: false,
    name: "Jane",
    lastName: "one",
  });

  return (
    <form>
      <label>
        First name:
        {state.editable ? (
          <b>{state.name}</b>
        ) : (
          <input
            defaultValue={state.name}
            onChange={(event) => {
              let prevState = { ...state };
              setState({ ...prevState, name: event.target.value });
            }}
          />
        )}
      </label>

      <label>
        Last name:
        {state.editable ? (
          <b>{state.lastName}</b>
        ) : (
          <input
            defaultValue={state.lastName}
            onChange={(event) => {
              let prevState = {
                ...state,
                lastName: event.target.value,
              };

              setState({ ...prevState, lastName: event.target.value });
            }}
          />
        )}
      </label>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          setState((prev) => {
            return { ...prev, editable: !prev.editable };
          });
        }}
      >
        Edit Profile
      </button>
      <p>
        <i>Hello, Jane Jacobs!</i>
      </p>
    </form>
  );
}
