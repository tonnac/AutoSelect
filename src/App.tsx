import { useState } from "react";
import { Experience } from "./Components/Index";
import Item from "./Components/Item";
import useInput from "./Hooks/useInput";
import Calculator from "./Calculator/Calculator";

export interface ItemInterface {
  count: number;
  expValue: number;
}

const App = () => {
  const current = useInput("");
  const target = useInput("");
  const [itemInfos, setItemInfos] = useState<ItemInterface[]>([
    { count: 20, expValue: 20 },
    { count: 40, expValue: 50 },
    { count: 50, expValue: 100 },
  ]);

  const onClickPlus = (e: any) => {
    setItemInfos((itemInfos) => [...itemInfos, { count: 0, expValue: 0 }]);
  };

  const onClickMinus = (e: any) => {
    setItemInfos(itemInfos.splice(0, 1));
  };

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
      <button
        style={{ marginTop: 25 }}
        onClick={(e) => {
          for (const iterator of itemInfos) {
            console.log(iterator);
          }
          Calculator(Number(current.value), Number(target.value), itemInfos);
        }}
      >
        계산
      </button>
    </div>
  );
};

export default App;
