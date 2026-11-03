import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AccountMenu = () => {
    const { t } = useTranslation();
    return (
        <div className="flex shrink-0 items-center gap-2">
            <Link to="/login" className="inline-flex min-h-9 items-center justify-center rounded-button px-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-secondary">
                {t("common.login")}
            </Link>
            <Link to="/register" className="inline-flex min-h-9 items-center justify-center rounded-button bg-brand-600 px-3 text-sm font-medium text-white transition-colors hover:bg-brand-700">
                {t("common.register")}
            </Link>
        </div>
    );
};

export default AccountMenu;
