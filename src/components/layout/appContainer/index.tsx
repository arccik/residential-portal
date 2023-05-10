import { GetSessionParams, getSession } from "next-auth/react";
import { ReactChildren, PropsWithChildren } from "react";
import Header from "../Header";

interface AppContainerProps {
  children: JSX.Element | JSX.Element[];
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <>
      <Header />
      <div className="container mx-auto">{children}</div>
    </>
  );
}
