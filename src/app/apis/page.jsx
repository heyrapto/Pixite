import Navbar from "@/components/Dropdown"
import Footer from "@/section/footer/Footer"

export default function APIPage() {
  return (
    <div className="w-full min-h-screen ">
      <Navbar />

      <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="w-full bg-[#D9FF6F] text-black pt-[50px]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10 py-20 md:py-28 lg:py-32 text-center">
          <h1 className="font-condRocGrotesk uppercase tracking-tight leading-[0.9] text-[42px] md:text-[84px] lg:text-[112px]">Plug Into the Power of Autify</h1>
          <p className="font-regRocGrotesk mt-6 md:mt-8 text-lg md:text-2xl max-w-4xl mx-auto">
            Integrate EPR compliance, sustainability tracking, and impact tokenization into your systems with Autify’s flexible, developer-friendly APIs.
          </p>
          <div className="mt-10">
            <a href="#apis" className="inline-block bg-[#7B2CFF] text-white font-extRocGrotesk uppercase px-6 py-3 text-sm md:text-base">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section id="apis" className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10 py-16 md:py-24 space-y-20 md:space-y-28">
        {/* Track & Trace - Supply Chain */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-4">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">Track & Trace</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">Supply Chain Traceability</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
              Autify Network’s API empowers seamless integration of end-to-end supply chain traceability into your existing systems. By leveraging blockchain and AI, every transaction, handoff, and transformation is recorded immutably, ensuring data integrity and real-time visibility. The API allows you to capture and share critical product information—such as origin, movement, and ownership—across all supply chain partners.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              With features like QR code and IoT sensor integration, stakeholders can instantly verify authenticity and compliance at any point. This transparency reduces counterfeiting, streamlines audits, and builds trust with both partners and consumers.
            </p>
          </div>
        </div>

        {/* Track & Trace - Sustainability */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-4">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">Track & Trace</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">Sustainability Traceability</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
              Our Sustainability Traceability API enables brands to track and document the environmental and social impact of their products throughout the supply chain. The API collects and standardizes data on carbon emissions, water usage, labor standards, and more, providing a holistic view of sustainability metrics.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              Companies can integrate this data directly into their reporting and consumer-facing platforms, supporting regulatory compliance and transparency. The solution helps identify hotspots for improvement and encourages more responsible sourcing and production practices. By making sustainability data accessible and verifiable, Autify Network helps brands demonstrate genuine progress toward their ESG goals.
            </p>
          </div>
        </div>

        {/* Circular Economy */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-4">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">Circular Economy</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">Recycling & Circular Economy</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
              Autify Network’s API for Recycling & Circular Economy solutions allows businesses to track materials from initial use through recycling and reintegration into new products. The API records each stage—collection, sorting, processing, and reuse—on a tamper-proof blockchain ledger, enabling true closed-loop verification.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              This supports regulatory compliance, EPR obligations, and consumer trust in recycled content claims. Businesses can automate reporting, monitor recycling rates, and incentivize responsible disposal and recovery through digital tokens or certifications. The result is a transparent, data-driven approach to advancing circular economy initiatives and reducing environmental impact.
            </p>
          </div>
        </div>

        {/* Responsibility */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-4">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">Responsibility</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">EPR & Carbon Credit MGMT</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
              Our EPR & Carbon Credit Management API streamlines the complex processes of Extended Producer Responsibility and carbon credit tracking. Producers can automate the calculation, reporting, and verification of their EPR and carbon credit obligations across plastics, tyres, electronics, and emissions.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              The API enables secure issuance, transfer, and retirement of credits, with every transaction recorded immutably for auditability. Integration with regulatory bodies and trading platforms is simplified, reducing administrative burden and risk of fraud. This solution empowers companies to efficiently manage compliance, unlock new value streams, and transparently demonstrate their commitment to environmental stewardship.
            </p>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  )
}