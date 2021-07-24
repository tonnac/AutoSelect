import React from "react";
import { ItemInterface } from "../App";

export interface ItemProps {
  index: number;
  items: ItemInterface[];
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[]>>;
}

export default function Item({ index, items, setItems }: ItemProps) {
  return (
    <div style={{ display: "inline-block", marginRight: 15 }}>
      <span style={{ fontSize: 25, paddingBottom: 25 }}>{`아이템 ${
        index + 1
      }`}</span>
      <br></br>
      <span>아이템 개수</span>
      <br></br>
      <input
        value={items[index].count}
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          items[index].count = Number(value);
          setItems(items.concat());
        }}
      ></input>
      <br></br>
      <span>경험치 값</span>
      <br></br>
      <input
        value={items[index].expValue}
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          items[index].expValue = Number(value);
          setItems(items.concat());
        }}
      ></input>
    </div>
  );
}
