import { useState } from "react";
import { Experience } from "./Components/Index";
import Item from "./Components/Item";
import useInput from "./Hooks/useInput";

export interface ItemInterface {
  count: number;
  expValue: number;
}

const App = () => {
  const current = useInput("");
  const target = useInput("");
  const [itemInfos, setItemInfos] = useState<ItemInterface[]>([]);

  const onClickPlus = (e: any) => {
    setItemInfos((itemInfos) => [...itemInfos, { count: 0, expValue: 0 }]);
  };

  const onClickMinus = (e: any) => {
    setItemInfos(itemInfos.splice(0, 1));
  };

  itemInfos.map((v) => {
    console.log(v);
  });

  return (
    <div>
      <div>
        <Experience current={current} target={target}></Experience>
      </div>
      <div style={{ padding: 20 }}>
        <button style={{ marginRight: 20 }} onClick={onClickPlus}>
          +
        </button>
        <button onClick={onClickMinus}>-</button>
      </div>
      <div>
        {itemInfos?.map((v, i) => (
          <Item
            key={i}
            index={i}
            items={itemInfos}
            setItems={setItemInfos}
          ></Item>
        ))}
      </div>
      <button style={{ marginTop: 25 }}>계산</button>
    </div>
  );
};

export default App;
