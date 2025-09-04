import Navbar from "@/components/Dropdown"
import Footer from "@/section/footer/Footer"
import Image from "next/image"
import traceImg from "@/public/images/3.jpg"
import seo from "@/public/images/rocket-primary.svg"
import grow from "@/public/images/bolt-white.svg";

export default function ProductsPage() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="w-full bg-[#D9FF6F] text-black pt-[50px] relative overflow-hidden h-fit">
      <div className="absolute inset-0 flex items-center justify-center z-0">
    <Image
      src={grow}
      alt="Centered Background"
      width={300}
      priority
    />
  </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 xl:px-10 py-20 md:py-28 lg:py-32 text-center">
          <div className="inline-flex items-center justify-center mx-auto mb-6">
            <span className="font-mediumRocGrotesk text-sm md:text-base bg-white/70 text-[#223] rounded-full px-4 py-2 uppercase tracking-wide">Our Products</span>
          </div>
          <h1 className="font-condRocGrotesk tracking-tight leading-[0.9] text-[42px] md:text-[84px] lg:text-[96px]">
            Built for Compliance. Designed for Impact.
          </h1>
          <p className="font-regRocGrotesk mt-6 md:mt-8 text-lg md:text-2xl max-w-4xl mx-auto">
            Solura offers powerful tools to manage EPR compliance, track sustainability, and tokenize impact — all in one seamless platform.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10 py-16 md:py-24 space-y-20 md:space-y-28">
        {/* Track & Trace - Supply Chain */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5">
            <div className="w-full aspect-[4/3] bg-[#F5F5F5] flex items-center justify-center">
              <Image src={traceImg} alt="Supply Chain Traceability" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">Track & Trace</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">Supply Chain Traceability</h2>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
            Solura Network leverages blockchain and AI to provide end-to-end traceability across complex supply chains. Every transaction and product movement is recorded immutably, allowing all stakeholders to verify origins, authenticity, and compliance in real time.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              This transparency combats counterfeiting and inefficiencies, ensuring products are tracked from source to shelf. Businesses and consumers alike benefit from increased trust and data integrity throughout the supply chain.
            </p>
          </div>
        </div>

        {/* Track & Trace - Sustainability */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">Track & Trace</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">Sustainability Traceability</h2>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
              Our platform enables brands to track and verify the sustainability credentials of their products at every stage. By capturing data on materials, processes, and certifications, Solura Network helps companies prove their environmental impact and meet regulatory requirements.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              This empowers businesses to make greener choices and gives consumers confidence in the sustainability of their purchases. The result is greater accountability and measurable progress toward sustainability goals.
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="w-full aspect-[4/3] bg-[#F5F5F5] flex items-center justify-center">
              <Image src={seo} alt="Sustainability Traceability" width={300} height={300} />
            </div>
          </div>
        </div>

        {/* Circular Economy */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5">
            <div className="w-full aspect-[4/3] bg-[#F5F5F5] flex items-center justify-center">
              <Image src={traceImg} alt="Recycling & Circular Economy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">CircularEconomy</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">Recycling &amp; Circular Economy</h2>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
            Solura Network supports the transition to a circular economy by tracking materials through their lifecycle and facilitating recycling initiatives. Blockchain records ensure that recycled content and waste management processes are transparent and verifiable.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              This not only helps brands meet EPR obligations but also incentivizes responsible resource use and reduces environmental impact. Companies can demonstrate closed-loop practices and consumers can trust recycled claims.
            </p>
          </div>
        </div>

        {/* Responsibility */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="font-extRocGrotesk text-[#7B2CFF] uppercase text-sm tracking-wide">Responsibility</p>
            <h2 className="font-condRocGrotesk uppercase text-[34px] md:text-[54px] leading-[1] mt-2">EPR & Carbon Credit MGMT</h2>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed">
              Our platform streamlines Extended Producer Responsibility (EPR) compliance and carbon credit management by automating reporting, verification, and credit issuance. Producers can track their obligations for plastics, tyres, electronics, and carbon emissions—all on a single, tamper-proof ledger.
            </p>
            <p className="font-regRocGrotesk text-base md:text-lg leading-relaxed mt-4">
              This simplifies regulatory compliance, reduces fraud, and enables transparent trading of carbon credits and EPR certificates. Companies can efficiently manage their environmental responsibilities and unlock new value streams.
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="w-full aspect-[4/3] bg-[#F5F5F5] flex items-center justify-center">
              <Image src={seo} alt="EPR & Carbon Credit" width={300} height={300} />
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  )
}