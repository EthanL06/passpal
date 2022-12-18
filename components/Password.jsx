import { useState, useEffect } from "react";
import { usePopper } from "react-popper";

import Options from "./Options";
import { Copy } from "./icons";

const Password = () => {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      setDisable(true);
    } else {
      setDisable(false);
      setPassword(generatePassword());
    }
  }, [length, uppercase, lowercase, numbers, symbols]);

  // Create a function that generates a password based on the options selected
  const getCharacters = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersStr = "0123456789";
    const symbolsStr = "!@#$%^&*()_+";

    let characters = "";

    if (uppercase) {
      characters += uppercaseLetters;
    }

    if (lowercase) {
      characters += lowercaseLetters;
    }

    if (numbers) {
      characters += numbersStr;
    }

    if (symbols) {
      characters += symbolsStr;
    }

    return characters;
  };

  const generatePassword = () => {
    const characters = getCharacters();
    let password = "";

    for (let i = 0; i < length; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
  };

  const handleGeneratePassword = () => {
    setPassword(generatePassword());
  };

  return (
    <div className="flex gap-y-9 w-full px-6 max-w-2xl flex-col">
      <div className="border-2 border-black dark:border-white dark:bg-neutral-900 dark:text-white px-2 py-3 w-full text-lg font-semibold flex justify-between gap-x-6">
        <span className="overflow-auto">{password}</span>
        <CopyButton password={password} />
      </div>
      <Options
        length={length}
        setLength={setLength}
        setUppercase={setUppercase}
        setLowercase={setLowercase}
        setNumbers={setNumbers}
        setSymbols={setSymbols}
      />

      <GenerateButton isDisabled={disable} click={handleGeneratePassword} />
    </div>
  );
};

const CopyButton = ({ password }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [showPopper, setShowPopper] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setShowPopper(true);
    setTimeout(() => {
      setShowPopper(false);
    }, 1000);
  };

  return (
    <>
      <button
        className="w-6 h-6 rounded-full text-black dark:text-white active:translate-y-0.5 duration-100"
        onClick={copyToClipboard}
        ref={setReferenceElement}
      >
        <Copy />
      </button>
      {showPopper ? (
        <div
          className="bg-black text-white px-2 py-1 rounded-lg text-sm absolute"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          Copied!
        </div>
      ) : null}
    </>
  );
};

const GenerateButton = ({ isDisabled, click }) => {
  return (
    <button
      onClick={click}
      disabled={isDisabled}
      className="bg-black dark:bg-white uppercase font-bold text-white dark:text-black py-3 text-3xl active:translate-y-0.5 duration-100 disabled:hover:cursor-not-allowed"
    >
      GENERATE
    </button>
  );
};

export default Password;
