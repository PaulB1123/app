import { useState, useEffect } from "react";
export default function Fetcher(props) {
  const [character, setCharecter] = useState({ name: "Loading" });
  const [count, setCount] = useState(1);
  const [isDisable, setDisable] = useState(true);
  useEffect(() => {
    async function get() {
      const res = await fetch("https://swapi.dev/api/people/" + count);
      const data = await res.json();
      setCharecter(data);
      setDisable(false);
    }
    get();
  }, [count]);
  function nextCharacter() {
    setCount((old) => old + 1);
    setCharecter({ name: "Loading" });
    setDisable(true);
  }

  function nextCharacterMinusOne() {
    setCount((old) => old - 1);
    setCharecter({ name: "Loading" });
    setDisable(true);
  }

  return (
    <div id="button_to_change">
      <div class="data_up">
        {count} - {character.name}
      </div>
      <div class="buttons_down">
        <button disabled={isDisable} onClick={nextCharacter}>
          Add 1
        </button>
        <button disabled={count === 0 ? true : isDisable} onClick={nextCharacterMinusOne}>
          Minus 1
        </button>
      </div>
    </div>
  );
}
