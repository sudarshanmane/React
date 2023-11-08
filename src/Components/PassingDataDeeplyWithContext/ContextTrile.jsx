import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextTrile = ({ children }) => {
  const [login, setlogin] = useState("");

  return (
    <Context.Provider value={{ login, setlogin }}>{children}</Context.Provider>
  );
};

const Context01 = () => {
  return (
    <div>
      <ContextTrile>
        <Context02></Context02>
      </ContextTrile>
    </div>
  );
};

const Context02 = () => {
  let { login, setlogin } = useContext(Context);
  console.log(login);
  setlogin("slakjdfnasjkl,.d");
  return <div>This is the context {login}</div>;
};

export default Context01;
