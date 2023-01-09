function DataCard(props: any) {
  console.log(props.credibilityScore);
  return (
    <div className="p-2 flex flex-row bg-white m-1 rounded-1 shadow appearance-none">
      <div
        className={`credibility-score-${props.credibilityScore} flex justify-center items-center`}
      >
        {props.credibilityScore}
      </div>
      <div className="ml-3">{props.title}</div>
    </div>
  );
}

export default DataCard;
