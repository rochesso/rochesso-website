const Circle = (props) => {
  const square = props.square;
  const radius = square / 2;
  return (
    <svg className={props.className} height={square} width={square}>
      <circle cx={radius} cy={radius} r={radius} />
    </svg>
  );
};

export default Circle;
