import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Navbar />
      
      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          <div className="glass-card p-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to BaatCheet. By accessing or using our platform, you agree to be bound by these Terms and Conditions. 
                Please read them carefully before using our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                BaatCheet provides a platform connecting users with empathetic listeners for voice and video conversations. 
                Our services are designed to offer emotional support and companionship, not professional therapy or counseling.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. User Accounts</h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>You must be at least 18 years old to use our services</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to provide accurate and complete information</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users must not:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Use abusive, threatening, or harassing language</li>
                <li>Share inappropriate or explicit content</li>
                <li>Attempt to contact listeners outside the platform</li>
                <li>Impersonate others or provide false information</li>
                <li>Use the service for illegal purposes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                All payments are processed securely through our payment partners. Prices are displayed in Indian Rupees (INR) 
                and are inclusive of applicable taxes. By making a payment, you agree to our payment terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. All conversations are confidential. We do not record or store 
                conversation content. Please refer to our Privacy Policy for detailed information on how we handle your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                BaatCheet is not a substitute for professional mental health services. If you are experiencing a mental 
                health crisis, please contact emergency services or a qualified mental health professional immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                BaatCheet shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                arising from your use of the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms and Conditions, please contact us at support@baatcheet.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
