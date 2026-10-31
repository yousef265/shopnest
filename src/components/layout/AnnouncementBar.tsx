import Container from "../common/Container";

const AnnouncementBar = () => {
    return (
        <div className="bg-brand-900 text-white ">
            <Container className="flex min-h-9 items-center justify-center py-2">
                <p className="text-center text-xs font-medium sm:text-sm">Discover something you'll love at ShopNest</p>
            </Container>
        </div>
    );
};

export default AnnouncementBar;
