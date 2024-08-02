import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { difficulty, digits } from "@/features/routes/numer0n/Numer0npage";
import "@/features/routes/numer0n/Numer0npage.css";

type Numer0nOptionProps = {
  setDifficulty: Dispatch<SetStateAction<difficulty>>;
  setDigits: Dispatch<SetStateAction<digits>>;
  setFirstAttack: Dispatch<SetStateAction<boolean>>;
  setGameStart: Dispatch<SetStateAction<boolean>>;
};

type difficultyArray = {
  value: difficulty;
  text: string;
};

const Numer0nOption = ({
  setDifficulty,
  setDigits,
  setFirstAttack,
  setGameStart,
}: Numer0nOptionProps) => {
  // 難易度
  const handleSelectDifferChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value as difficulty);
  };
  const difficultyArray: difficultyArray[] = [
    { value: "god", text: "最強" },
    { value: "strong", text: "強い" },
    { value: "normal", text: "普通" },
    { value: "weak", text: "弱い" },
    { value: "zako", text: "ザコ" },
  ];

  // ケタ数
  const handleDigitsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDigits(Number(event.target.value) as digits);
  };
  const digitsArray: digits[] = [3, 4, 5, 6, 7, 8, 9];

  // 先攻・後攻
  const handleAttackChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "true") {
      setFirstAttack(true);
    } else {
      setFirstAttack(false);
    }
  };

  return (
    <div>
      最強AIに勝てるかな？
      <br />
      <div className="select-differ-container">
        <div className="select-differ-title">強さ</div>
        <div className="select-differ-dial">
          <select className="select-differ" onChange={handleSelectDifferChange}>
            {difficultyArray.map(({ value, text }) => (
              <option value={value}>{text}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="select-digit-container">
        <div className="select-digit-title">対戦桁数</div>
        <div className="select-ditit-dial">
          <select className="select-digit" onChange={handleDigitsChange}>
            {digitsArray.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="select-first-attack-container">
        <div className="select-first-attack-title">先攻</div>
        <div className="select-first-attack-dial">
          <select className="select-first-attack" onChange={handleAttackChange}>
            <option value="true">あなた</option>
            <option value="false">AI</option>
          </select>
        </div>
      </div>
      <button
        className="start-game"
        type="button"
        onClick={() => {
          setGameStart(true);
        }}
      >
        ゲーム開始
      </button>
    </div>
  );
};

export default Numer0nOption;
