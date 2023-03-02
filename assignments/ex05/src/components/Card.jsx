import { useState } from "react";

const Card = ({ vote, setVote, type, title, img }) => {
  const [isMax, setIsMax] = useState(false);
  const [isMin, setIsMin] = useState(true);

  const handleVote = () => {
    if (vote === 10) {
      alert("You can't vote anymore");
    } else {
      setIsMin(false);
      setVote((prev) => prev + 1);
      if (vote === 9) {
        setIsMax(true);
      }
    }
  };

  const handleUnvote = () => {
    if (vote === 0) {
      alert("You can't unvote anymore");
    } else {
      setIsMax(false);
      setVote((prev) => prev - 1);
      if (vote === 1) {
        setIsMin(true);
      }
    }
  };

  return (
    <div className="border-3 border-black rounded-md bg-orange-100 text-black">
      <div className="grid p-5 grid-cols-6">
        <div className="flex flex-col gap-4 items-start col-span-4">
          <h1 className="text-3xl font-semibold">{type}</h1>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            nisi fugiat asperiores, minima natus quisquam illo nam corporis vero
            nulla fuga dolorem dolor odio, nesciunt commodi voluptates libero
            eveniet. Voluptates eos eaque tempora et exercitationem ab itaque
            earum quis modi ad quos sint, adipisci repellendus eligendi dolore
            consequuntur vitae! Molestias totam dolorum repellendus? Tenetur
            fuga nemo cumque, voluptatibus consequuntur laudantium magnam libero
            atque ratione ab rem minima, sequi praesentium blanditiis dolores!
            Earum voluptates magni dolorum eum doloremque repellendus! Nam,
            modi.
          </p>
        </div>
        <div className="col-span-2">
          <img src={img} />
        </div>
        <div className="flex col-span-full justify-center gap-2">
          <button
            className="bg-sky-500 border border-black rounded-md p-2"
            onClick={handleVote}
          >
            Click to Vote
          </button>
          <section className="flex items-center border-2 border-black bg-lime-400 p-3 text-xl rounded-lg text-purple-500 font-semibold">
            {isMin ? "MIN" : isMax ? "MAX" : vote}
          </section>
          <button
            className="bg-sky-500 border border-black rounded-md p-2"
            onClick={handleUnvote}
          >
            Click to Unvote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
