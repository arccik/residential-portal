import type { Announce } from "../types/Annouce";

const Card = ({ subject, text, image, userId, user }: Announce) => {
  return (
    <div className="card m-3 bg-base-100 shadow-xl first:mt-0 last:mt-0 ">
      <figure>{image && <img src={image} alt={subject} />}</figure>
      <div className="card-body">
        <h2 className="card-title">{subject}</h2>
        <p className="truncate">{text}</p>
        <div className="card-actions justify-start">
          <p>Posted By {user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
