import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Header score={score} highScore={highScore}></Header>
      <Main
        score={score}
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      ></Main>
    </>
  );
}

export default App;
