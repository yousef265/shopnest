import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.resolvedLanguage || "en";

    const handleChangeLanguage = () => {
        const nextLanguage = currentLanguage === "en" ? "ar" : "en";
        i18n.changeLanguage(nextLanguage);
    };
    return (
        <button
            type="button"
            onClick={handleChangeLanguage}
            aria-label="Change Language"
            className="flex h-10 items-center gap-2 rounded-button px-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary hover:text-brand-600"
        >
            <Globe size={19} strokeWidth={1.8} />
            <span>{currentLanguage === "en" ? "العربية" : "English"}</span>
        </button>
    );
};

export default LanguageSwitcher;
