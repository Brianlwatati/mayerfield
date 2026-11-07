import { Link } from "react-router";

interface CafeHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  highlights: string[];
  image: string;
  imageAlt: string;
  imageEyebrow: string;
  imageHeadline: string;
  note: string;
}

export default function CafeHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryAction,
  secondaryAction,
  highlights,
  image,
  imageAlt,
  imageEyebrow,
  imageHeadline,
  note,
}: CafeHeroProps) {
  return (
    <section
      aria-label={eyebrow}
      className="relative overflow-hidden bg-linear-to-br from-amber-50 via-orange-50 to-white"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-900 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-amber-950 sm:text-5xl lg:text-6xl">
            {title}
            <span className="block font-serif font-medium italic text-amber-800">
              {highlight}
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to={primaryAction.href}
              className="inline-flex items-center gap-2 rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-950/15 transition hover:-translate-y-0.5 hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
            >
              {primaryAction.label}
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </Link>
            <Link
              to={secondaryAction.href}
              className="rounded-full px-5 py-3 text-sm font-semibold text-amber-950 transition hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
            >
              {secondaryAction.label}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-amber-200/80 pt-6 text-sm font-medium text-stone-600">
            {highlights.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="text-amber-700">
                  ✳
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-3 rounded-4xl bg-amber-200/70"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white bg-amber-100 shadow-2xl shadow-amber-950/15">
            <img
              src={image}
              alt={imageAlt}
              className="h-72 w-full object-cover sm:h-96"
              fetchPriority="high"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-amber-950/65 via-transparent to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                  {imageEyebrow}
                </p>
                <p className="mt-1 text-xl font-bold sm:text-2xl">
                  {imageHeadline}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mb-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 text-2xl backdrop-blur sm:flex"
              >
                ☕
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 shadow-lg sm:-left-7 sm:px-5">
            <p className="text-xs font-medium text-stone-500">
              A good day starts
            </p>
            <p className="mt-0.5 text-sm font-bold text-amber-950">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
