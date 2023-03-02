import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

const data = [
  {
    type: "อาหารคาว",
    title: "ข้าวผัด",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    type: "อาหารหวาน",
    title: "มะม่วง",
    img: "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
  },
];

function App() {
  const [vote, setVote] = useState(0);
  const [vote2, setVote2] = useState(0);

  return (
    <div className="max-w-5xl flex flex-col gap-2">
      <h1 className="text-yellow-500 text-4xl font-semibold mb-6">โหวตอาหาร</h1>
      <Card
        vote={vote}
        setVote={setVote}
        type={data[0].type}
        title={data[0].title}
        img={data[0].img}
      />
      <Card
        vote={vote2}
        setVote={setVote2}
        type={data[1].type}
        title={data[1].title}
        img={data[1].img}
      />
    </div>
  );
}

export default App;
