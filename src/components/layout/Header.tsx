import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import AnnouncementBar from "./AnnouncementBar";

const navigationLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Categories", to: "/categories" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

const Header = () => (
    <>
        <AnnouncementBar />

        <header className="border-b border-border bg-surface">
            <Container className="flex min-h-20 items-center justify-between gap-8">
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
            </Container>
        </header>
    </>
);

export default Header;
