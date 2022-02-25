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
  const r = 30;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={50}
      cy={50}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''}
      strokeWidth="0.3rem"
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    />
  );
};

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 ${'50 50'})`}>
        <Circle colour="lightgrey" percentage={100} />
        <Circle colour={colour} percentage={pct} />
      </g>
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

Pie.propTypes = {
  percentage: propTypes.number,
  colour: propTypes.string,
};

Pie.defaultProps = {
  percentage: 55,
  colour: 'lightgrey',
};

export default Pie;
