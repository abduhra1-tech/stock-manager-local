import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import { features } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Everything you need to succeed"
          subtitle="Powerful features to help you launch faster, grow smarter, and scale effortlessly."
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <Card key={feature.title} hover>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
