import { useContext, useState } from "react";
import { LevelContext, LevelContext2 } from "./LevelContext";

export default function Page() {
  const level = useContext(LevelContext);
  return (
    <LevelContext02>
      <PrintLoginLogoutValues></PrintLoginLogoutValues>
    </LevelContext02>
  );
}

const LevelContext02 = ({ children }) => {
  const [login, setLogin] = useState("one");
  const [logout, setLogout] = useState("two");

  return (
    <LevelContext2.Provider value={{ login, setLogin, logout, setLogout }}>
      {children}
    </LevelContext2.Provider>
  );
};

const PrintLoginLogoutValues = () => {
  let data = useContext(LevelContext2);
  console.log("datadatadata", data);
  return (
    <div>
      {data.login}
      {data.logout}
      {data.setLogout("completedd")}
      {data.logout}
    </div>
  );
};

function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
