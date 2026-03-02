import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricing } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Choose the plan that's right for you. All plans include a 14-day free trial."
        />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-4"
                  : "bg-white border-2 border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3
                  className={`text-xl font-semibold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-lg ${
                        plan.highlighted ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-blue-200" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? "bg-blue-500" : "bg-blue-100"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.highlighted ? "text-white" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <span
                      className={
                        plan.highlighted ? "text-blue-100" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? "secondary" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <p className="text-center text-gray-500 mt-12">
          <span className="inline-flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            30-day money-back guarantee. No questions asked.
          </span>
        </p>
      </Container>
    </section>
  );
}
