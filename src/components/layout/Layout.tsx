import type React from "react";
import scss from "./Layout.module.scss";
import type { FC } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
interface ILayout {
  children: React.ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
