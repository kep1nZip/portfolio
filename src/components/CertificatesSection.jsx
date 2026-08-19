import { certificates } from "@/data/certificates";

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4">
      <div className="container">
        <p className="section-label mb-4">
          Certificates
        </p>

        <h2 className="serif text-4xl font-semibold mb-4">
          Learning & Certifications
        </h2>

        <p className="max-w-2xl text-foreground/70 mb-10">
          Certifications and learning achievements that reflect my
          continuous growth in web development, UI/UX design, and
          modern technologies.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="overflow-hidden border border-border bg-card"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {certificate.title}
                </h3>

                <p className="text-sm text-foreground/70 mt-1">
                  {certificate.issuer}
                </p>

                <p className="text-xs uppercase tracking-wider text-primary mt-3">
                  {certificate.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};