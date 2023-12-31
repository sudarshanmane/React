// import { Button, Space } from "antd";
// import { useState } from "react";

// function Panel({ title, children }) {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <Button
//           onClick={() => {
//             setIsActive(true);
//           }}
//         >
//           show
//         </Button>
//       )}
//     </section>
//   );
// }

// export default function Accordion() {
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Space direction="vertical" style={{ marginLeft: "20px" }}>
//         <Panel title="About">
//           With a population of about 2 million, Almaty is Kazakhstan's largest
//           city. From 1929 to 1997, it was its capital city.
//         </Panel>
//         <Panel title="Etymology">
//           The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
//           for "apple" and is often translated as "full of apples". In fact, the
//           region surrounding Almaty is thought to be the ancestral home of the
//           apple, and the wild <i lang="la">Malus sieversii</i> is considered a
//           likely candidate for the ancestor of the modern domestic apple.
//         </Panel>
//       </Space>
//     </>
//   );
// }

import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  function onShow() {
    let active = activeIndex === 0 ? 1 : 0;
    setActiveIndex(active);
  }
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={activeIndex === 0} onShow={onShow}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={activeIndex === 1} onShow={onShow}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
