import { Search, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../common/Button";

interface SearchFieldProps {
    value: string;
    onChange: (value: string) => void;
    autoFocus?: boolean;
}

const SearchField = ({ value, onChange, autoFocus = false }: SearchFieldProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex h-11 items-center gap-2 rounded-button border border-border bg-surface-secondary px-3">
            <Search size={18} className="shrink-0 text-text-muted" aria-hidden="true" />

            <input
                type="search"
                name="search"
                value={value}
                autoFocus={autoFocus}
                onChange={(event) => onChange(event.target.value)}
                placeholder={t("common.searchProducts")}
                aria-label={t("common.searchProducts")}
                className="min-w-0 flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
            />

            {value && (
                <Button variant="ghost" size="icon" onClick={() => onChange("")} aria-label={t("common.clearSearch")} className="shrink-0">
                    <X size={16} aria-hidden="true" />
                </Button>
            )}
        </div>
    );
};

const SearchBar = () => {
    const { t } = useTranslation();
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Desktop Search */}
            <div className="hidden md:block">
                <div className="w-64">
                    <SearchField value={searchValue} onChange={setSearchValue} />
                </div>
            </div>

            {/* Mobile Search Toggle */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen((previous) => !previous)}
                aria-label={isOpen ? t("common.closeSearch") : t("common.openSearch")}
                aria-expanded={isOpen}
                className="md:hidden"
            >
                <Search size={21} aria-hidden="true" />
            </Button>

            {/* Mobile Search Panel */}
            {isOpen && (
                <div className="absolute inset-e-0 top-full z-50 mt-3 w-[min(90vw,320px)] rounded-card border border-border bg-surface p-3 shadow-lg md:hidden">
                    <SearchField value={searchValue} onChange={setSearchValue} autoFocus />
                </div>
            )}
        </div>
    );
};

export default SearchBar;
