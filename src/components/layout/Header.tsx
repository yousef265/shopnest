import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import AnnouncementBar from "./AnnouncementBar";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";

const Header = () => {
    const { t } = useTranslation();

    const navigationLinks = [
        { label: t("common.home"), to: "/" },
        { label: t("common.shop"), to: "/shop" },
        { label: t("common.categories"), to: "/categories" },
        { label: t("common.about"), to: "/about" },
        { label: t("common.contact"), to: "/contact" },
    ];

    return (
        <>
            <AnnouncementBar />

            <header className="border-b border-border bg-surface">
                <Container className="flex min-h-20 items-center justify-between gap-8">
                    {/* Logo */}
                    <NavLink to="/" aria-label="ShopNest Home" className="shrink-0 text-2xl font-bold tracking-tighter text-brand-600">
                        ShopNest
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
                        {navigationLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => ["text-sm font-medium transition-colors duration-200", isActive ? "text-brand-600" : "text-text-secondary hover:text-brand-600"].join(" ")}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Search Bar */}
                    <SearchBar />

                    {/* Header Actions */}
                    <HeaderActions />
                </Container>
            </header>
        </>
    );
};

export default Header;
