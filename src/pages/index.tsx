import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import Card from "~/components/Card";
import FloatingIconMenu from "~/components/widgets/FloatingIconMenu";
import SquareMenuGrid from "~/components/widgets/SquareMenuGrid";

import { Announce } from "~/types/Annouce";
import Notification from "~/components/widgets/Notification";
import ProfileModal from "~/components/Profile/ProfileModal";
import { NextAuthComponentType } from "~/types/AuthComponent";
import AppContainer from "~/components/layout/appContainer";

const Home: NextAuthComponentType = () => {
  const { data: annouceData } = api.announce.getAll.useQuery<Announce>();

  return (
    <>
      <Head>
        <title>- yXa - Residential Portal </title>
        <meta name="description" content="Residential Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-8">
          {annouceData?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        <div className="col-span-4">
          <FloatingIconMenu />

          <SquareMenuGrid />
          {/* <Notification text="We are using cookies for no reason." /> */}
        </div>
      </div>

      <ProfileModal />
    </>
  );
};

Home.auth = true;

export default Home;
