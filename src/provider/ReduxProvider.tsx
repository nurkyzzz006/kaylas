import type { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/Store";

interface IProps {
  children: ReactNode;
}
const ReduxProvider: FC<IProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
