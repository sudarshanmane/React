import { Space } from "antd";
import { useState } from "react";
// import AddItem from "./AddItem.js";
// import PackingList from "./PackingList.js";

let nextId = 3;
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

function AddItem({ onAddItem }) {
  return (
    <div>
      <Space>
        {"   "} <input type="text" id="one" />
        <button
          onClick={() => {
            let data = document.querySelector("#one").value;
            onAddItem(data);
          }}
        >
          Add Item
        </button>
      </Space>
    </div>
  );
}

function PackingList({ items, onChangeItem, onDeleteItem }) {
  const [state, setstate] = useState();
  let data = items.map((element) => {
    return (
      <div style={{ display: "flex" }}>
        <Space>
          <input
            type="checkbox"
            key={element.id}
            id={element.id}
            onClick={(e) => {
              onChangeItem(e.target.checked);
              setstate(e.target.checked);
            }}
          />
          <h4>{element.title}</h4>
          <button onClick={() => onDeleteItem(element.id, state)}>
            Delete
          </button>
        </Space>
      </div>
    );
  });

  return <div>{data}</div>;
}

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(0);

  function handleAddItem(title) {
    setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem) {
    if (nextItem) {
      setPacked(packed + 1);
    } else {
      setPacked(packed - 1);
    }
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId, checked) {
    setTotal(total - 1);
    setItems(items.filter((item) => item.id !== itemId));
    checked && setPacked(packed - 1);
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
}
