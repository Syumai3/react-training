/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    color: "#aaa",
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotionです</p>
      <button>ボタン</button>
    </div>
  );
};
