import React from "react";

function Kids(props) {
const { kidsData } = props;
const renderListKids = () => {

  return (kidsData.map(kid => {

    if(kid.kidsData) {

      return <Kids
        kidsData={kid.kidsData}
        key={kid.id}
      />
    }

      return (
        <li key={kid.id}>
          <p>{kid.id}</p>
        </li>);
    })

  );
};

return (
  <ul>
    {kidsData.length > 0 && renderListKids()}
  </ul>
);


}

export default Kids;