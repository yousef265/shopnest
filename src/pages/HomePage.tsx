import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

const HomePage = () => {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section id="hero">
                <Container className="py-16 sm:py-20 lg:py-24">
                    <SectionHeading eyebrow="WELCOME TO SHOPNEST" title="Discover Your Next Favorite Thing" description="Explore a carefully selected collection of products for your everyday life." />
                </Container>
            </section>

            {/* Categories Section */}
            <section id="categories" className="border-y border-border bg-surface-secondary">
                <Container className="py-16">
                    <SectionHeading eyebrow="EXPLORE OUR COLLECTION" title="Shop by Category" description="Find exactly what you're looking for." align="center" />
                </Container>
            </section>

            {/* Featured Products Section */}
            <section id="featured-products">
                <Container className="py-16">
                    <SectionHeading eyebrow="HANDPICKED FOR YOU" title="Featured Products" description="Discover some of our favorite picks." />
                </Container>
            </section>

            {/* Promotional Banner Section */}
            <section id="promotion" className="bg-surface-secondary">
                <Container className="py-16">
                    <SectionHeading eyebrow="SPECIAL OFFERS" title="Something Special Is Waiting" description="Discover exciting offers and find something you'll love." align="center" />
                </Container>
            </section>

            {/* New Arrivals Section */}
            <section id="new-arrivals">
                <Container className="py-16">
                    <SectionHeading eyebrow="JUST ARRIVED" title="New Arrivals" description="Take a look at what's new at ShopNest." />
                </Container>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="border-y border-border bg-surface-secondary">
                <Container className="py-16">
                    <SectionHeading title="Shopping Made Better" description="A shopping experience designed around your needs." align="center" />
                </Container>
            </section>
        </div>
    );
};

export default HomePage;
