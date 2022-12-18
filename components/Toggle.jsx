import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

function Toggle({ text, change, initial }) {
  const [enabled, setEnabled] = useState(initial);

  useEffect(() => {
    change(enabled);
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-black dark:bg-white" : "bg-gray-200 dark:bg-black"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">{text}</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-neutral-900 transition`}
      />
    </Switch>
  );
}

export default Toggle;
