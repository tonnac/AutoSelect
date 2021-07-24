import { ItemInterface } from "../App";

interface NeedExp extends ItemInterface {
  index: number;
}

export default function Calculator(
  current: number,
  target: number,
  itemInfos: ItemInterface[]
) {
  itemInfos.sort((lhs, rhs) => {
    return lhs.expValue - rhs.expValue;
  });

  let needItemCount: NeedExp[] = [];

  const needExp = target - current;
  let accumulatedExp = 0;

  const remain = () => {
    return needExp - accumulatedExp;
  };

  const excessamount = () => {
    return accumulatedExp - needExp;
  };

  for (let [i, item] of itemInfos.entries()) {
    let count: number = 0;

    if (item.expValue * item.count <= remain()) {
      count = item.count;
    } else {
      count = Math.ceil(remain() / item.expValue);
    }

    accumulatedExp += item.expValue * count;
    needItemCount.push({
      index: i,
      count: count,
      expValue: item.expValue,
    });

    console.log(
      `Index:${i} Value:${item.expValue} Count:${count} CurrentExp:${
        count * item.expValue
      } AccumulatedExp:${accumulatedExp} Remain:${remain()}`
    );

    if (remain() <= 0) {
      break;
    }
  }

  if (excessamount() > 0) {
    console.log(`Excess Amount ${excessamount()}`);
    for (let i = needItemCount.length - 2; i >= 0; i--) {
      const item = needItemCount[i];

      const excessQuotient = Math.floor(excessamount() / item.expValue);

      if (excessQuotient > 0) {
        console.log(`Count:${excessQuotient} ExpValue:${item.expValue}`);
        item.count -= excessQuotient;
        accumulatedExp -= excessQuotient * item.expValue;
      }
    }
  }

  console.log(`Accumulated Exp:${accumulatedExp} Need Exp:${needExp}`);

  needItemCount = needItemCount.filter((v) => {
    return v.count !== 0;
  });

  for (const iterator of needItemCount) {
    console.log(iterator);
  }
}
