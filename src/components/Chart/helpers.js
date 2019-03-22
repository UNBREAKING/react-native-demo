export const weekChartGenerator = daylyWeights =>
  daylyWeights.map((item, index) => (index + 1) % 7 === 1 ? `Uke ${ 1 + Math.round((index + 1) / 7)}` : '')