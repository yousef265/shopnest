import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import AnnouncementBar from "./AnnouncementBar";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";
import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const { t } = useTranslation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationLinks = [
        { label: t("common.home"), to: "/" },
        { label: t("common.shop"), to: "/shop" },
        { label: t("common.categories"), to: "/categories" },
        { label: t("common.about"), to: "/about" },
        { label: t("common.contact"), to: "/contact" },
    ];

    const handleMenuToggle = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const handleMenuClose = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <>
            <AnnouncementBar />

            <header className="border-b border-border bg-surface">
                <Container className="flex min-h-20 items-center justify-between gap-4 lg:gap-6">
                    {/* Logo */}
                    <NavLink to="/" aria-label="ShopNest Home" className="shrink-0 text-2xl font-bold tracking-tighter text-brand-600">
                        ShopNest
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main navigation" className="hidden flex-1 justify-center items-center gap-5 xl:flex">
                        {navigationLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    ["whitespace-nowrap text-sm font-medium transition-colors duration-200", isActive ? "text-brand-600" : "text-text-secondary hover:text-brand-600"].join(" ")
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Search Bar */}
                    <div className="ms-auto xl:ms-0">
                        <SearchBar />
                    </div>

                    {/* Header Actions */}
                    <HeaderActions onMenuClick={handleMenuToggle} isMobileMenuOpen={isMobileMenuOpen} />
                </Container>
            </header>
            {/* Mobile Menu */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMenuClose} navigationLinks={navigationLinks} />
        </>
    );
};

export default Header;
