import { useState, memo, useCallback } from "react";
import { useEffect } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
import { ColoredMessage } from "./components/ColoredMessage";
import { Emotion } from "./components/Emotion";

export const App = memo(() => {
  console.log("Appレンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      {/* <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage> */}
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
