import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
    children: ReactNode;
}

const LanguageProvider = ({ children }: IProps) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const language = i18n.resolvedLanguage || "en";
        const direction = language === "ar" ? "rtl" : "ltr";

        document.documentElement.dir = direction;
        document.documentElement.lang = language;

        localStorage.setItem("shopnest-language", language);
    }, [i18n.resolvedLanguage]);

    return children;
};

export default LanguageProvider;
