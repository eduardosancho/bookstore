import propTypes from 'prop-types';

const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  let result = 0;
  if (isNegativeOrNaN) {
    return result;
  }

  if (isTooHigh) {
    result = 100;
  } else {
    result = percentage;
  }
  return result;
};

const Circle = ({ colour, percentage }) => {
  const r = 50;
  const circ = 2.3 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''}
      strokeWidth="1.5rem"
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    />
  );
};

const Text = ({ percentage }) => (
  <text
    x="50%"
    y="50%"
    dominantBaseline="central"
    textAnchor="middle"
    fontSize="1.5em"
  >
    {percentage.toFixed(0)}
    %
  </text>

);

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle colour="lightgrey" percentage={60} />
        <Circle colour={colour} percentage={(pct * 0.6)} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

Circle.propTypes = {
  percentage: propTypes.number,
  colour: propTypes.string,
};

Circle.defaultProps = {
  percentage: 55,
  colour: 'lightgrey',
};

Text.propTypes = {
  percentage: propTypes.number,
};

Text.defaultProps = {
  percentage: 55,
};

Pie.propTypes = {
  percentage: propTypes.number,
  colour: propTypes.string,
};

Pie.defaultProps = {
  percentage: 55,
  colour: 'lightgrey',
};

export default Pie;
