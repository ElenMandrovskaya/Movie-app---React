import { useState } from "react";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export function Spinner() {
  return (
    <GridLoader color="#fd004b" loading={useState(true)} css={override} size={100} margin={20}/>
  );
}