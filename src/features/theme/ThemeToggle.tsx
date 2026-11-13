import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

import Button from "../../components/common/Button";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { toggleTheme } from "./themeSlice";

const ThemeToggle = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.theme.mode);

    const isDark = mode === "dark";

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(toggleTheme())}
            aria-label={isDark ? t("common.theme.switchToLight") : t("common.theme.switchToDark")}
            title={isDark ? t("common.theme.switchToLight") : t("common.theme.switchToDark")}
            className="w-full justify-start rounded-button p-3 text-sm font-normal"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span className="xl:hidden text-sm font-medium">{isDark ? t("common.theme.dark") : t("common.theme.light")}</span>
        </Button>
    );
};

export default ThemeToggle;
