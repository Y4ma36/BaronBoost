import React from "react";
import * as auth from "../../../../Utils/auth.jsX";

export const getSoloPrice = async () => {
  const response = await auth.soloPrice();
  const data = response.data;
  console.log(data);
};
