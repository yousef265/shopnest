import { Link } from "react-router-dom";

const AccountMenu = () => {
    return (
        <div className="hidden sm:flex shrink-0 items-center gap-2">
            <Link to="/login" className="inline-flex min-h-9 items-center justify-center rounded-button px-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-secondary">
                Login
            </Link>
            <Link to="/register" className="inline-flex min-h-9 items-center justify-center rounded-button bg-brand-600 px-3 text-sm font-medium text-white transition-colors hover:bg-brand-700">
                Sign Up
            </Link>
        </div>
    );
};

export default AccountMenu;
