import { useSession } from "next-auth/react";

const ProfileModal = () => {
  const { data: sessionData, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;

  return (
    <>
      <input type="checkbox" id="profile-modal-id" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profile-modal-id"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>
          <figure>
            <img src={sessionData?.user.image!} alt="Movie" />
          </figure>
          <h3 className="text-lg font-bold">
            How is going {sessionData?.user.name} ?
          </h3>
          <p className="py-4">
            You have signed in with {sessionData?.user.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
