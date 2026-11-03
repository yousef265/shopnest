import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-border">
            <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-text-secondary">
                © {new Date().getFullYear()} ShopNest. {t("common.footer.copyright")}
            </div>
        </footer>
    );
};

export default Footer;
