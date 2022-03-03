import { useState } from "react";

const useToggle = (initialValue: boolean): [boolean, (newValue?: boolean) => void] => {
    const [value, setValue] = useState(initialValue);
    const toggleValue = (newValue?: boolean) =>
        (typeof newValue === "boolean") ? setValue(newValue) : setValue(!value);

    return [value, toggleValue,];
};

export default useToggle;
