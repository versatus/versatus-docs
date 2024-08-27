import React from "react";
import CardList from "./CardList";

const IconCards = ({ data, numColumns }) => {
  return (
    <CardList
      data={data}
      numColumns={numColumns}
      className={"icon_cards_container"}
    />
  );
};

export default IconCards;
