import { useEffect } from "react";
import { useAppSelector } from "../../app/store";

const ThemeSync = () => {
    const mode = useAppSelector((state) => state.theme.mode);

    useEffect(() => {
        document.documentElement.dataset.theme = mode;
        localStorage.setItem("shopnest-theme", mode);
    }, [mode]);

    return null;
};

export default ThemeSync;
