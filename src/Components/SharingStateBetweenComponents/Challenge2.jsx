import { Input, Space } from "antd";
import React, { useEffect, useState } from "react";

const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];

function SearchInput({ setSearchedQuery }) {
  return (
    <>
      <Input onChange={(e) => setSearchedQuery(e.target.value)}></Input>
    </>
  );
}

const FileteringList = () => {
  const [searchedQuery, setSearchedQuery] = useState(null);
  const [selectedQueryList, setSelectedQueryList] = useState(foods);
  useEffect(() => {
    if (searchedQuery) {
      let searchedFoodsList = foods.filter((food) =>
        food.name.toLowerCase().includes(searchedQuery)
      );
      setSelectedQueryList(searchedFoodsList);
    } else {
      setSelectedQueryList(foods);
    }
  }, [searchedQuery]);

  return (
    <div>
      <SearchInput setSearchedQuery={setSearchedQuery}></SearchInput>
      <Space direction="vertical">
        {selectedQueryList.map((element) => {
          return (
            <div style={{ padding: "20px" }}>
              <div>{element.name}:</div>
              <div>{element.description}</div>
              <div style={{ height: "10px" }}></div>
            </div>
          );
        })}
      </Space>
    </div>
  );
};

export default FileteringList;
