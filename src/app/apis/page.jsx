import Navbar from "@/components/Dropdown"
import Footer from "@/section/footer/Footer"
import Image from "next/image"

import api1 from "@/public/images/apis/api-1.webp"
import api2 from "@/public/images/apis/api-2.webp"
import api3 from "@/public/images/apis/api-3.webp"
import api4 from "@/public/images/apis/api-4.webp"
import grow from "@/public/images/bolt-white.svg"
import seo from "@/public/images/rocket-primary.svg"

// Array of content sections
const apiSections = [
  {
    id: "supply-chain-traceability",
    tag: "Track & Trace",
    title: "Supply Chain Traceability",
    description: [
      "Solura Network’s API empowers seamless integration of end-to-end supply chain traceability into your existing systems. By leveraging blockchain and AI, every transaction, handoff, and transformation is recorded immutably, ensuring data integrity and real-time visibility. The API allows you to capture and share critical product information—such as origin, movement, and ownership—across all supply chain partners.",
      "With features like QR code and IoT sensor integration, stakeholders can instantly verify authenticity and compliance at any point. This transparency reduces counterfeiting, streamlines audits, and builds trust with both partners and consumers."
    ],
    image: api1,
    imageAlt: "Supply Chain Traceability",
    reverse: false,
  },
  {
    id: "sustainability-tracking",
    tag: "Track & Trace",
    title: "Sustainability Traceability",
    description: [
      "Our Sustainability Traceability API enables brands to track and document the environmental and social impact of their products throughout the supply chain. The API collects and standardizes data on carbon emissions, water usage, labor standards, and more, providing a holistic view of sustainability metrics.",
      "Companies can integrate this data directly into their reporting and consumer-facing platforms, supporting regulatory compliance and transparency. The solution helps identify hotspots for improvement and encourages more responsible sourcing and production practices. By making sustainability data accessible and verifiable, Solura Network helps brands demonstrate genuine progress toward their ESG goals."
    ],
    image: api2,
    imageAlt: "Sustainability Traceability",
    reverse: true,
  },
  {
    id: "recycling-circular-economy",
    tag: "Circular Economy",
    title: "Recycling & Circular Economy",
    description: [
      "Solura Network’s API for Recycling & Circular Economy solutions allows businesses to track materials from initial use through recycling and reintegration into new products. The API records each stage—collection, sorting, processing, and reuse—on a tamper-proof blockchain ledger, enabling true closed-loop verification.",
      "This supports regulatory compliance, EPR obligations, and consumer trust in recycled content claims. Businesses can automate reporting, monitor recycling rates, and incentivize responsible disposal and recovery through digital tokens or certifications. The result is a transparent, data-driven approach to advancing circular economy initiatives and reducing environmental impact."
    ],
    image: api3,
    imageAlt: "Recycling & Circular Economy",
    reverse: false,
  },
  {
    id: "epr-carbon-credits",
    tag: "Responsibility",
    title: "EPR & Carbon Credit MGMT",
    description: [
      "Our EPR & Carbon Credit Management API streamlines the complex processes of Extended Producer Responsibility and carbon credit tracking. Producers can automate the calculation, reporting, and verification of their EPR and carbon credit obligations across plastics, tyres, electronics, and emissions.",
      "The API enables secure issuance, transfer, and retirement of credits, with every transaction recorded immutably for auditability. Integration with regulatory bodies and trading platforms is simplified, reducing administrative burden and risk of fraud. This solution empowers companies to efficiently manage compliance, unlock new value streams, and transparently demonstrate their commitment to environmental stewardship."
    ],
    image: api4,
    imageAlt: "EPR & Carbon Credit",
    reverse: true,
  },
]

export default function APIPage() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="w-full min-h-screen bg-white">
        {/* Hero */}
        <section className="w-full bg-[#D9FF6F] text-black pt-[50px] relative overflow-hidden h-fit">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image src={grow} alt="Centered Background" width={300} priority />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 xl:px-10 py-20 md:py-28 lg:py-32 text-center">
            <div className="inline-flex items-center justify-center mx-auto mb-6">
              <span className="font-mediumRocGrotesk text-sm md:text-base bg-white/70 text-[#223] rounded-full px-4 py-2 uppercase tracking-wide">APIs</span>
            </div>
            <h1 className="font-condRocGrotesk tracking-tight leading-[0.9] text-[42px] md:text-[84px] lg:text-[96px]">Plug Into the Power of Solura</h1>
            <p className="font-regRocGrotesk mt-6 md:mt-8 text-lg md:text-2xl max-w-4xl mx-auto">
              Integrate EPR compliance, sustainability tracking, and impact tokenization into your systems with Solura flexible, developer-friendly APIs.
            </p>
          </div>
        </section>

        {/* Dynamic Content Sections */}
        <section id="apis" className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10 py-16 md:py-24 space-y-20 md:space-y-28">
          {apiSections.map((section, idx) => (
            <div
              key={section.id}
              id={section.id}
              className={`grid md:grid-cols-12 gap-8 md:gap-10 items-center`}
            >
              {/* Image */}
              <div className={`md:col-span-5 ${section.reverse ? "order-1 md:order-2" : ""}`}>
                <div className="w-full aspect-[4/3] bg-[#F5F5F5] flex items-center justify-center">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`md:col-span-7 ${section.reverse ? "order-2 md:order-1" : ""}`}>
                <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">{section.tag}</p>
                <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">{section.title}</h2>
                {section.description.map((para, i) => (
                  <p key={i} className={`font-regRocGrotesk text-base md:text-lg leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  )
}