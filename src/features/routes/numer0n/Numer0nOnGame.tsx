import { difficulty, digits } from "@/features/routes/numer0n/Numer0npage";
import { ChangeEvent, useState } from "react";

type Numer0nOnGameProps = {
  difficulty: difficulty;
  digits: digits;
  firstAttack: boolean;
};

const Numer0nOnGame = ({
  difficulty,
  digits,
  firstAttack,
}: Numer0nOnGameProps) => {
  // 番号入力
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // コールした番号
  const [calledNumber, setCalledNumber] = useState([]);

  // コールする
  const handleCallNumber = () => {
    alert(inputValue);
  };

  return (
    <div>
      <div>ゲーム開始した</div>
      <div>難易度: {difficulty}</div>
      <div>ケタ数: {digits}</div>
      <div>先攻: {String(firstAttack)}</div>
      <input
        type="text"
        className="ongame-input-space"
        minLength={digits}
        maxLength={digits}
        value={inputValue}
        onChange={handleInputChange}
        required
      />
      <button className="start-game" type="button" onClick={handleCallNumber}>
        送信
      </button>
    </div>
  );
};

export default Numer0nOnGame;
