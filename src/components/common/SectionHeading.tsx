type SectionHeadingAlign = "start" | "center";

interface SectionHeadingProps {
    title: string;
    description?: string;
    eyebrow?: string;
    className?: string;
    align?: SectionHeadingAlign;
}

const SectionHeading = ({ title, description, eyebrow, className = "", align = "start" }: SectionHeadingProps) => {
    return (
        <div className={["flex flex-col gap-3", align === "center" ? "items-center text-center" : "items-start text-start", className].join(" ")}>
            {eyebrow && <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</span>}

            <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">{title}</h2>

            {description && <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">{description}</p>}
        </div>
    );
};

export default SectionHeading;
