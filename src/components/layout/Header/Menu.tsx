import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { MdOutlineMenu } from "react-icons/md";
import ProfileModal from "../../Profile/ProfileModal";

const Menu = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-1 justify-end px-2">
      {sessionData ? (
        <div className="flex items-stretch">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost rounded-btn btn">
              <MdOutlineMenu className="text-2xl" />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <label htmlFor="profile-modal-id">Profile</label>
              </li>
              <li>
                <a
                  className="text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => signOut()}
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <p onClick={() => signIn()}>Sign In</p>
      )}
    </div>
  );
};

export default Menu;
