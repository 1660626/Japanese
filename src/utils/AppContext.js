import { createContext } from "react";

const defaultValue = {};
const AppContext = createContext(defaultValue);

const UserProvider = AppContext.Provider;
const UserConsumer = AppContext.Consumer;
console.log(UserProvider)
console.log(UserConsumer)

export { AppContext, UserProvider, UserConsumer };