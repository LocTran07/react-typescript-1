import React, { createContext, ReactNode } from "react";




interface Context {
  lastTime:string,
  status:string
}

const defaultValue = {
  lastTime: "9/4/2022",
  status: "In Progess",
};


export const context = createContext<Context>(defaultValue);

interface Children {
  children : ReactNode
}

const ProgressContextProvider = ({ children}:Children) => {

  return <context.Provider  value={defaultValue} >{children}</context.Provider>;
};

export default ProgressContextProvider;
