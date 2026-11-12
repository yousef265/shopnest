import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProps {
    variant?: "icon" | "menu";
    onClick?: () => void;
}

const CartButton = ({ variant = "icon", onClick }: IProps) => {
    const { t } = useTranslation();

    return (
        <NavLink
            to="/cart"
            onClick={onClick}
            aria-label={t("common.cart")}
            className={({ isActive }) =>
                [
                    "rounded-button transition-colors duration-200",
                    variant === "icon"
                        ? ["flex size-10 items-center justify-center", isActive ? "text-brand-600" : "text-text-secondary hover:bg-surface-secondary hover:text-brand-600"].join(" ")
                        : ["flex items-center gap-3 px-4 py-3 text-sm", isActive ? "bg-brand-50 text-brand-700" : "text-text-secondary hover:bg-surface-secondary hover:text-brand-600"].join(" "),
                ].join(" ")
            }
        >
            <ShoppingCart size={variant === "icon" ? 21 : 19} strokeWidth={1.8} />
            {variant === "menu" && t("common.cart")}
        </NavLink>
    );
};

export default CartButton;
