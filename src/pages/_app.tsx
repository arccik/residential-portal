import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import type { NextAuthComponentType } from "../types/AuthComponent";
import AppContainer from "~/components/layout/appContainer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const AuthComponent = Component as NextAuthComponentType;
  return (
    <SessionProvider session={session}>
      <AppContainer>
        {AuthComponent.auth ? (
          <Auth>
            <AuthComponent {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </AppContainer>
    </SessionProvider>
  );
};

function Auth({ children }: any) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}



export default api.withTRPC(MyApp);
