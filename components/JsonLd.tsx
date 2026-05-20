export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "TouristAttraction"],
    name: "Pensiunea Trei Păstori",
    description:
      "Complex turistic în Zahareuca, Telenești, Moldova. Piscină, restaurant, cazare, foișoare, pescuit și natură autentică.",
    url: "https://treipastori.md",
    telephone: ["+37360117999", "+37360941836"],
    email: "cristianciobanu2007@gmail.com",
    image: "https://treipastori.md/og-image.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zahareuca",
      addressLocality: "Zahareuca",
      addressRegion: "Telenești",
      addressCountry: "MD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.4833,
      longitude: 28.3667,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Piscină", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parcare gratuită", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pescuit", value: true },
      { "@type": "LocationFeatureSpecification", name: "Foișoare", value: true },
    ],
    priceRange: "$$",
    currenciesAccepted: "MDL",
    paymentAccepted: "Cash",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
