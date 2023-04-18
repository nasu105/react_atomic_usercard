import { Outlet } from "react-router";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
     <Header />
      <Outlet />
    </>
  )
}