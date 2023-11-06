import { useReducer } from "react";
export default function Messenger() {
  const [state, dispatchState] = useReducer(messengerReducer, initialState);

  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatchState={dispatchState}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        state={state.selectedIdMessage}
        dispatchState={dispatchState}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

// ----------- Reducer ----------

const initialState = {
  selectedId: 0,
  message: "Hello",
  selectedIdMessage: { 0: "hi", 1: "hi", 2: "hi" },
};

function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action?.contactId,
        message: "",
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message,
        selectedIdMessage: action.selectedIdMessage,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function ContactList({ contacts, selectedId, dispatchState }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatchState({
                  type: "changed_selection",
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chat({ contact, message, dispatchState, state }) {
  function updateMessage(message) {
    state[contact.id] = message;
    console.log("statestate", state);
    dispatchState({ type: "edited_message", selectedIdMessage: state });
  }
  console.log(state[contact.id.toString()]);
  return (
    <section className="chat">
      <textarea
        defaultValue={state[contact.id]}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          updateMessage(e.target.value);
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
