import { difficulty, digits } from "@/features/routes/numer0n/Numer0npage";

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
  return (
    <div>
      <div>ゲーム開始した</div>
      <div>難易度: {difficulty}</div>
      <div>ケタ数: {digits}</div>
      <div>先攻: {String(firstAttack)}</div>
    </div>
  );
};

export default Numer0nOnGame;
