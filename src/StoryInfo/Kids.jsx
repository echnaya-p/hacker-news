import React from "react";

function Kids(props) {
  const { kidsData } = props;

  const renderKids = () => kidsData.map((kid) => {
    const date = new Date(kid.time).toLocaleString("ru");

    function createMessage() {
      return {__html: kid.text};
    }

    return (
      <li key={kid.id}>
        <div>
          <p>{kid.by}: </p>
          <div dangerouslySetInnerHTML={createMessage()}/>
          <p>{date}</p>
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