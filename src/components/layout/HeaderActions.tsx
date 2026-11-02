import { Heart, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const HeaderActions = () => {
    return (
        <div className="flex shrink-0 items-center gap-2">
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
        </div>
    );
};

export default HeaderActions;
