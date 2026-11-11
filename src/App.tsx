import { RouterProvider } from "react-router-dom";

import { router } from "./app/router";
import LanguageProvider from "./providers/LanguageProvider";
import ThemeSync from "./features/theme/ThemeSync";

const App = () => {
    return (
        <LanguageProvider>
            <ThemeSync />
            <RouterProvider router={router} />
        </LanguageProvider>
    );
};

export default App;
