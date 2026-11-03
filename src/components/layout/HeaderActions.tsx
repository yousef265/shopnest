import { Heart, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import LanguageSwitcher from "./LanguageSwitcher";

const HeaderActions = () => {
    return (
        <div className="flex shrink-0 items-center gap-2">
            {/* Wishlist */}

            <NavLink
                to="/wishlist"
                aria-label="Wishlist"
                className={({ isActive }) =>
                    [
                        "relative flex size-10 items-center justify-center rounded-button",
                        "transition-colors duration-200",
                        isActive ? "text-brand-600" : "text-text-secondary hover:bg-surface-secondary hover:text-brand-600",
                    ].join(" ")
                }
            >
                <Heart size={21} strokeWidth={1.8} />
            </NavLink>
            {/* Cart */}

            <NavLink
                to="/cart"
                aria-label="Shopping cart"
                className={({ isActive }) =>
                    [
                        "relative flex size-10 items-center justify-center rounded-button",
                        "transition-colors duration-200",
                        isActive ? "text-brand-600" : "text-text-secondary hover:bg-surface-secondary hover:text-brand-600",
                    ].join(" ")
                }
            >
                <ShoppingCart size={21} strokeWidth={1.8} />
            </NavLink>

            {/* Language */}
            <LanguageSwitcher />

            {/* AccountMenu */}

            <AccountMenu />
        </div>
    );
};

export default HeaderActions;
