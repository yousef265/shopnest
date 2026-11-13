import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

import Button from "../../common/Button";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.resolvedLanguage || "en";

    const handleChangeLanguage = () => {
        const nextLanguage = currentLanguage === "en" ? "ar" : "en";
        i18n.changeLanguage(nextLanguage);
    };

    return (
        <Button variant="ghost" size="sm" onClick={handleChangeLanguage} aria-label={t("common.changeLanguage")} className="w-full justify-start p-3 min-h-10">
            <Globe size={19} strokeWidth={1.8} aria-hidden="true" />
            <span>{currentLanguage === "en" ? "العربية" : "English"}</span>
        </Button>
    );
};

export default LanguageSwitcher;
