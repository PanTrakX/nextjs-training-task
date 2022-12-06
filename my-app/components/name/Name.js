import React from "react";

import { Wrapper, FirstName, LastName } from "./Name.styles";

const Name = (props) => {
  return (
    <Wrapper>
      <FirstName>{props.firstName}</FirstName>
      &nbsp;
      <LastName>{props.lastName}</LastName>
    </Wrapper>
  );
};

export default Name;
