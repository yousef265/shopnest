import { useEffect, useRef } from "react";
import { Heart, ShoppingCart, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../common/Button";
import AccountMenu from "./AccountMenu";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationLink {
    label: string;
    to: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navigationLinks: NavigationLink[];
}

const MobileMenu = ({ isOpen, onClose, navigationLinks }: MobileMenuProps) => {
    const { t } = useTranslation();
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;
        closeButtonRef.current?.focus();

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 xl:hidden">
            {/* Overlay */}
            <button type="button" aria-label={t("common.closeMenu")} onClick={onClose} className="absolute inset-0 size-full cursor-default bg-black/50" />

            {/* Drawer */}
            <aside
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                aria-label={t("common.mobileNavigation")}
                className="absolute inset-y-0 inset-s-0 flex w-[min(85vw,360px)] flex-col border-e border-border bg-surface shadow-xl"
            >
                {/* Drawer Header */}
                <div className="flex min-h-20 items-center justify-between border-b border-border px-5">
                    <span id="mobile-menu-title" className="text-2xl font-bold tracking-tighter text-brand-600">
                        ShopNest
                    </span>

                    <Button ref={closeButtonRef} variant="secondary" size="icon" onClick={onClose} aria-label="Close menu">
                        <X size={22} />
                    </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-2">
                    <ul className="flex flex-col gap-2">
                        {navigationLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    onClick={onClose}
                                    className={({ isActive }) =>
                                        [
                                            "block rounded-button px-4 py-3 text-sm font-medium transition-colors",
                                            isActive ? "bg-brand-50 text-brand-700" : "text-text-secondary hover:bg-surface-secondary hover:text-brand-600",
                                        ].join(" ")
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Shopping Links */}
                    <div className="mt-6 border-t border-border pt-5">
                        <NavLink
                            to="/wishlist"
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-button px-4 py-3 text-sm text-text-secondary hover:bg-surface-secondary hover:text-brand-600"
                        >
                            <Heart size={19} />
                            {t("common.wishlist")}
                        </NavLink>

                        <NavLink to="/cart" onClick={onClose} className="flex items-center gap-3 rounded-button px-4 py-3 text-sm text-text-secondary hover:bg-surface-secondary hover:text-brand-600">
                            <ShoppingCart size={19} />
                            {t("common.cart")}
                        </NavLink>
                    </div>

                    {/* Account */}
                    <div className="mt-6 border-t border-border pt-5">
                        <AccountMenu />
                    </div>

                    {/* Language */}
                    <div className="mt-5 border-t border-border pt-4">
                        <LanguageSwitcher />
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default MobileMenu;
