import Input from "./Input";
import { UseInputInterface } from "../Hooks/useInput";

interface ExperienceState {
  current: UseInputInterface;
  target: UseInputInterface;
}

export default function Experience(expState: ExperienceState) {
  return (
    <div>
      <Input inputName="현재 경험치" useInput={expState.current}></Input>
      <Input inputName="목표 경험치" useInput={expState.target}></Input>
    </div>
  );
}
