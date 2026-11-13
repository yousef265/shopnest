import Button from "../../common/Button";
import AccountMenu from "./AccountMenu";

import ThemeToggle from "../../../features/theme/ThemeToggle";
import { useTranslation } from "react-i18next";
import WishlistButton from "../../../features/wishlist/WishlistButton";
import CartButton from "../../../features/cart/CartButton";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface IProps {
    onMenuClick: () => void;
    isMobileMenuOpen: boolean;
}

const HeaderActions = ({ onMenuClick, isMobileMenuOpen }: IProps) => {
    const { t } = useTranslation();
    return (
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Wishlist - Desktop */}
            <div className="hidden xl:flex">
                <WishlistButton />
            </div>

            {/* Cart */}
            <CartButton />

            {/* Language & Theme Toggle & Account- Desktop */}
            <div className="hidden items-center gap-2 xl:flex">
                <ThemeToggle />
            </div>
            <div className="hidden items-center gap-2 xl:flex">
                <LanguageSwitcher />
            </div>
            <div className="hidden items-center gap-2 xl:flex">
                <AccountMenu />
            </div>

            {/* Mobile Menu */}
            <Button
                variant="secondary"
                size="icon"
                onClick={onMenuClick}
                aria-label={isMobileMenuOpen ? t("common.closeMenu") : t("common.openMenu")}
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
