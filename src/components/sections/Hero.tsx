import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { siteConfig, trustIndicators } from "@/lib/constants";

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now in public beta — Join 5,000+ early adopters
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
            {siteConfig.tagline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              {siteConfig.cta.primary}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Play size={20} className="mr-2" />
              {siteConfig.cta.secondary}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10">
            <TrustBadges items={trustIndicators} />
          </div>
        </div>

        {/* Hero Image/Screenshot */}
        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Main browser mockup */}
            <div className="relative">
              {/* Soft shadow underneath */}
              <div
                className="absolute -inset-4 bg-gradient-to-b from-blue-200/20 via-blue-100/10 to-transparent rounded-3xl blur-2xl"
                aria-hidden="true"
              />

              <div className="relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700/50">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-block px-4 py-1 bg-gray-700 rounded text-xs text-gray-300">
                      app.launchpad.com/dashboard
                    </div>
                  </div>
                </div>
                {/* Dashboard Screenshot */}
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/dashboard-placeholder.svg"
                    alt="Product dashboard preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
