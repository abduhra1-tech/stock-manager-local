import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { siteConfig, trustIndicators } from "@/lib/constants";

export function CTA() {
  return (
    <section className="py-24 bg-blue-600">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 p-12 md:p-16">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to launch your startup?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join thousands of founders who are building faster with{" "}
              {siteConfig.name}. Start your free trial today — no credit card
              required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="white" size="lg" className="w-full sm:w-auto">
                {siteConfig.cta.primary}
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Schedule a Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10">
              <TrustBadges items={trustIndicators} variant="light" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
