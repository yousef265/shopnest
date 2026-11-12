import { useTranslation } from "react-i18next";
import Container from "../../common/Container";

const AnnouncementBar = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-brand-900 text-white ">
            <Container className="flex min-h-9 items-center justify-center py-2">
                <p className="text-center text-xs font-medium sm:text-sm"> {t("announcement.message")}</p>
            </Container>
        </div>
    );
};

export default AnnouncementBar;
