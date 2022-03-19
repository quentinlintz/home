const WIDTH = 10;

const scoreToEmoji = (scoreData) => {
  const total = scoreData.reduce((prev, curr) => prev + curr, 0);
  const normalized = scoreData.map((score) =>
    Math.ceil((score / total) * WIDTH)
  );
  let graph = [];
  normalized.forEach((score) => {
    const black = WIDTH - score;
    const red = score;
    graph.push('🟥'.repeat(red) + '⬛️'.repeat(black));
  });
  return graph;
};

export default scoreToEmoji;
