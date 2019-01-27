import { useContext } from "react";
import { TestContext } from "./Lib";

/**
 * React hook to use test context
 * @returns {string} Test-String
 * @example const styles = useStyles()
 */
const useTest = () => {
  /**
   * Get context from Testcontext
   */
  const test = useContext(TestContext);
  return test;
};

export { useTest };
