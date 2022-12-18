import { useEffect, useRef, useState } from "react";
import Toggle from "./Toggle";

const Options = ({
  length,
  setLength,
  setUppercase,
  setLowercase,
  setNumbers,
  setSymbols,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.style.setProperty("--value", element.value);
      element.style.setProperty(
        "--min",
        element.min === "" ? "0" : element.min
      );
      element.style.setProperty(
        "--max",
        element.max === "" ? "100" : element.max
      );

      if (localStorage.getItem("theme") === "dark") {
        element.classList.add("range-dark");
      } else {
        element.classList.add("range-light");
      }

      element.addEventListener("input", () => {
        element.style.setProperty("--value", element.value);
      });
    }

    return () => {
      if (element) {
        element.removeEventListener("input", () =>
          element.style.setProperty("--value", element.value)
        );
      }
    };
  }, []);

  function handleRangeChange(e) {
    setLength(e.target.value);
  }

  return (
    <div className="flex flex-col w-full uppercase text-xl dark:text-white">
      <div className="flex flex-col gap-y-3 mb-8">
        <div className="flex justify-between items-center">
          <span>Character Length</span>
          <span className="text-3xl">{length}</span>
        </div>
        <input
          ref={ref}
          className={`w-full styled-slider slider-progress`}
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={handleRangeChange}
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex gap-x-4">
          <Toggle
            text="Toggle uppercase letters"
            change={setUppercase}
            initial={true}
          />
          <span>Uppercase</span>
        </div>
        <div className="flex gap-x-4">
          <Toggle
            text="Toggle lowercase letters"
            change={setLowercase}
            initial={true}
          />
          <span>Lowercase</span>
        </div>
        <div className="flex gap-x-4">
          <Toggle text="Toggle numbers" change={setNumbers} initial={true} />
          <span>Numbers</span>
        </div>
        <div className="flex gap-x-4">
          <Toggle text="Toggle symbols" change={setSymbols} initial={false} />
          <span>Symbols</span>
        </div>
      </div>
    </div>
  );
};
export default Options;
