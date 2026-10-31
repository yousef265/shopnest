import AnnouncementBar from "./AnnouncementBar";

const Header = () => (
    <>
        <AnnouncementBar />

        <header className="border-b border-border">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
                <span className="text-xl font-bold text-text-primary">ShopNest</span>

                <span className="text-sm text-text-secondary">Header</span>
            </div>
        </header>
    </>
);

export default Header;
