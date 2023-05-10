import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Announce } from "~/types/Annouce";
import { NextAuthComponentType } from "~/types/AuthComponent";
import { api } from "~/utils/api";

const Profile: NextAuthComponentType = () => {
  const { data: sessionData, status } = useSession();
  const router = useRouter();
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") return <div>You are not logged in.</div>;
  return (
    <div className="card mx-auto my-auto w-1/2 bg-base-100 shadow-xl lg:card-side">
      {sessionData?.user.image && (
        <figure>
          <img src={sessionData?.user.image} alt="Movie" />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{sessionData?.user.name}</h2>
        <p>{sessionData?.user.email}</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn" onClick={() => router.push("/")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

Profile.auth = true;
export default Profile;
