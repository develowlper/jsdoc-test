import React, { createContext, useState, useEffect } from "react";

const TestContext = createContext("test");

const TestProvider = ({ test, children }) => {
  const [value, setValue] = useState("test");

  useEffect(() => {
    setValue(test);
  }, [test]);

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export { TestProvider, TestContext };
