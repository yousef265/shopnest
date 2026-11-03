import { useTranslation } from "react-i18next";

import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section id="hero">
                <Container className="py-16 sm:py-20 lg:py-24">
                    <SectionHeading eyebrow={t("home.hero.eyebrow")} title={t("home.hero.title")} description={t("home.hero.description")} />
                </Container>
            </section>

            {/* Categories Section */}
            <section id="categories" className="border-y border-border bg-surface-secondary">
                <Container className="py-16">
                    <SectionHeading eyebrow={t("home.categories.eyebrow")} title={t("home.categories.title")} description={t("home.categories.description")} align="center" />
                </Container>
            </section>

            {/* Featured Products Section */}
            <section id="featured-products">
                <Container className="py-16">
                    <SectionHeading eyebrow={t("home.featured.eyebrow")} title={t("home.featured.title")} description={t("home.featured.description")} />
                </Container>
            </section>

            {/* Promotional Banner Section */}
            <section id="promotion" className="bg-surface-secondary">
                <Container className="py-16">
                    <SectionHeading eyebrow={t("home.promotion.eyebrow")} title={t("home.promotion.title")} description={t("home.promotion.description")} align="center" />
                </Container>
            </section>

            {/* New Arrivals Section */}
            <section id="new-arrivals">
                <Container className="py-16">
                    <SectionHeading eyebrow={t("home.newArrivals.eyebrow")} title={t("home.newArrivals.title")} description={t("home.newArrivals.description")} />
                </Container>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="border-y border-border bg-surface-secondary">
                <Container className="py-16">
                    <SectionHeading title={t("home.benefits.title")} description={t("home.benefits.description")} align="center" />
                </Container>
            </section>
        </div>
    );
};

export default HomePage;
