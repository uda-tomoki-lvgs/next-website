"use client";

import { useState } from "react";
import Numer0nOption from "@/features/routes/numer0n/Numer0nOption";
import Numer0nOnGame from "@/features/routes/numer0n/Numer0nOnGame";

export type difficulty = "god" | "strong" | "normal" | "weak" | "zako";
export type digits = 3 | 4 | 5 | 6 | 7 | 8 | 9;

const Numer0nPage = () => {
  //難易度
  const [difficulty, setDifficulty] = useState<difficulty>("god");

  // ケタ数
  const [digits, setDigits] = useState<digits>(3);

  // 先攻・後攻
  const [firstAttack, setFirstAttack] = useState<boolean>(true);

  // ゲーム開始
  const [gameStart, setGameStart] = useState<boolean>(false);

  return (
    <div>
      {gameStart ? (
        <Numer0nOnGame
          difficulty={difficulty}
          digits={digits}
          firstAttack={firstAttack}
        />
      ) : (
        <Numer0nOption
          setDifficulty={setDifficulty}
          setDigits={setDigits}
          setFirstAttack={setFirstAttack}
          setGameStart={setGameStart}
        />
      )}
    </div>
  );
};

export default Numer0nPage;
