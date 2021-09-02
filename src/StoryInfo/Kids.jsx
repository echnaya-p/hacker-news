import React from "react";

function Kids(props) {
  const { kidsData } = props;
  const renderKids = () => kidsData.map((kid) => {
    return (
      <li key={kid.id}>
        <div>
          <p>{kid.by}: </p>
          <p>{kid.text}</p>
          <p>{kid.time}</p>
          </div>
        {kid.kidsData && kid.kidsData.length > 0 &&
        <Kids
          kidsData={kid.kidsData}
        />}
      </li>
    )
    });

  return (
    <ul>
      {renderKids()}
    </ul>
  );
}

export default Kids;