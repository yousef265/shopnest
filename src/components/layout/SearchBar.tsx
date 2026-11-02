import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            {/* Desktop Search */}
            <div className="hidden md:block">
                <div className="flex h-11 w-64 items-center gap-2 rounded-button border border-border bg-surface-secondary px-3">
                    <Search size={18} className="shrink-0 text-text-muted" />

                    <input
                        type="search"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        placeholder="Search products..."
                        aria-label="Search products"
                        className="min-w-0 flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
                    />

                    {searchValue && (
                        <button type="button" onClick={() => setSearchValue("")} aria-label="Clear search" className="shrink-0 text-text-muted transition-colors hover:text-text-primary">
                            <X size={16} />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Search Toggle */}
            <button
                type="button"
                onClick={() => setIsOpen((previous) => !previous)}
                aria-label={isOpen ? "Close search" : "Open search"}
                aria-expanded={isOpen}
                className="flex size-10 items-center justify-center rounded-button text-text-secondary transition-colors hover:bg-surface-secondary hover:text-brand-600 md:hidden"
            >
                <Search size={21} />
            </button>

            {/* Mobile Search Panel */}
            {isOpen && (
                <div className="absolute inset-e-0 top-full z-50 mt-3 w-[min(90vw,320px)] rounded-card border border-border bg-surface p-3 shadow-lg md:hidden">
                    <div className="flex h-11 items-center gap-2 rounded-button border border-border bg-surface-secondary px-3">
                        <Search size={18} className="shrink-0 text-text-muted" />

                        <input
                            type="search"
                            autoFocus
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                            placeholder="Search products..."
                            aria-label="Search products"
                            className="min-w-0 flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
                        />

                        {searchValue && (
                            <button type="button" onClick={() => setSearchValue("")} aria-label="Clear search" className="text-text-muted hover:text-text-primary">
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
