const nextLevelXp = (lvl: number) => ((lvl + 1) * 4) ** 2;
// const previousLevelXp = (lvl: number) => (lvl * 4) ** 2;

const getLevelFromXp = (xp: number, lvl = 0) => {
  if (xp > nextLevelXp(lvl)) return getLevelFromXp(xp, lvl + 1);
  return lvl;
};

export default getLevelFromXp;
