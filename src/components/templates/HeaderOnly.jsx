import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <Header>
      <div style={{ height: "50px", backgroundColor: "red" }}></div>
      {children}
    </Header>
  )
}