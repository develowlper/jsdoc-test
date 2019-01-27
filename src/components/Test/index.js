import React from "react";

import { Button } from "@material-ui/core";
import { useTest } from "../../lib";

/**
 * super cool test component
 * @returns React functional Test compont
 * @summary use test hook to get data
 * @since 0.1.0
 */
const Test = () => {
  const test = useTest();
  return <Button>{test}</Button>;
};

export default Test;

export { Test };
