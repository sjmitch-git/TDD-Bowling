export const bowling = (rolls: string): number => {
  const rollsArray = rolls.split(" ");
  let score = 0;

  for (let i = 0; i < rollsArray.length; i++) {
    const currentRoll = rollsArray[i];

    if (currentRoll === "X") {
      score += 10 + getStrikeBonus(rollsArray, i);
    } else if (currentRoll.includes("/")) {
      const nextRoll = rollsArray[i + 1] || "";
      score += 10 + getSparesBonus(currentRoll, nextRoll);
    } else {
      score += getFrameScore(currentRoll);
    }
  }

  return score;
};

const getFrameScore = (roll: string): number => {
  let frameScore = 0;
  for (let j = 0; j < roll.length; j++) {
    frameScore += rollValue(roll[j]);
  }
  return frameScore;
};

const getStrikeBonus = (rolls: string[], index: number): number => {
  let bonus = 0;
  const nextRoll = rolls[index + 1] || "";
  const nextNextRoll = rolls[index + 2] || "";

  if (nextRoll === "X" && nextNextRoll === "X") {
    bonus += 20; // 12 strikes in a row, count the next two rolls' total score
  } else if (nextRoll === "X") {
    bonus += 10 + rollValue(nextNextRoll[0] || "0") + rollValue(nextNextRoll[1] || "0");
  } else {
    bonus += rollValue(nextRoll[0] || "0") + rollValue(nextRoll[1] || "0");
  }

  return bonus;
};

const getSparesBonus = (currentRoll: string, nextRoll: string): number => {
  return 10 - rollValue(currentRoll[0]) + rollValue(nextRoll[0]);
};

const rollValue = (roll: string): number => {
  if (roll === "X") return 10;
  if (roll === "-") return 0;
  if (roll === "/") return 10;
  return parseInt(roll) || 0;
};
