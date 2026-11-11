import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import Button from "../common/Button";
import AccountMenu from "./AccountMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "../../features/theme/ThemeToggle";

interface IProps {
    onMenuClick: () => void;
    isMobileMenuOpen: boolean;
}

const HeaderActions = ({ onMenuClick, isMobileMenuOpen }: IProps) => {
    return (
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Wishlist - Desktop */}
            <NavLink
                to="/wishlist"
                aria-label="Wishlist"
                className={({ isActive }) =>
                    [
                        "hidden size-10 items-center justify-center rounded-button transition-colors duration-200 xl:flex",
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
                        "flex size-10 items-center justify-center rounded-button transition-colors duration-200",
                        isActive ? "text-brand-600" : "text-text-secondary hover:bg-surface-secondary hover:text-brand-600",
                    ].join(" ")
                }
            >
                <ShoppingCart size={21} strokeWidth={1.8} />
            </NavLink>

            {/* Language & Theme Toggle & Account- Desktop */}
            <div className="hidden items-center gap-2 xl:flex">
                <ThemeToggle />
                <LanguageSwitcher />
                <AccountMenu />
            </div>

            {/* Mobile Menu */}
            <Button
                variant="secondary"
                size="icon"
                onClick={onMenuClick}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className="xl:hidden"
            >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
        </div>
    );
};

export default HeaderActions;
