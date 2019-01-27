import { useContext } from "react";
import { TestContext } from "./Lib";

/**
 * React hook to use test context
 * @returns {string} Test-String
 */
const useTest = () => {
  const test = useContext(TestContext);
  return test;
};

export { useTest };
