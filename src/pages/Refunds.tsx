import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { AlertCircle, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function Refunds() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Navbar />
      
      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cancellations & <span className="text-gradient">Refunds</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          <div className="space-y-8">
            {/* Quick Summary */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Full Refund</h3>
                <p className="text-sm text-muted-foreground">Cancel 2+ hours before session</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">50% Refund</h3>
                <p className="text-sm text-muted-foreground">Cancel within 2 hours of session</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">No Refund</h3>
                <p className="text-sm text-muted-foreground">No-show or post-session</p>
              </div>
            </div>

            {/* Detailed Policy */}
            <div className="glass-card p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Cancellation Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that plans can change. Our cancellation policy is designed to be fair to both 
                  users and listeners while respecting everyone's time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Full Refund Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are eligible for a full refund if:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>You cancel your booking at least 2 hours before the scheduled session</li>
                  <li>The listener cancels or fails to join the session</li>
                  <li>Technical issues on our end prevent the session from taking place</li>
                  <li>The session quality was severely impacted due to platform issues</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Partial Refund (50%)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A 50% refund will be issued if:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>You cancel within 2 hours of your scheduled session</li>
                  <li>You need to end the session early due to unforeseen circumstances (within first 5 minutes)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">No Refund Situations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds will not be provided if:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>You fail to join the session (no-show)</li>
                  <li>You request a refund after the session has been completed</li>
                  <li>Technical issues are on your end (internet, device problems)</li>
                  <li>You violate our terms of service during the session</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">How to Request a Refund</h2>
                <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Go to "My Bookings" in your account</li>
                  <li>Select the booking you wish to cancel</li>
                  <li>Click on "Request Cancellation"</li>
                  <li>Provide a reason for cancellation (optional)</li>
                  <li>Submit your request</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Alternatively, you can contact our support team at support@baatcheet.com with your booking details.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Refund Processing Time</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Once approved, refunds are typically processed within:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>UPI/Net Banking:</strong> 3-5 business days</li>
                  <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                  <li><strong>Wallets:</strong> 1-2 business days</li>
                </ul>
              </section>

              <section className="space-y-4 border-t border-border/50 pt-6">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Need Help?</h3>
                    <p className="text-sm text-muted-foreground">
                      If you have any questions about our cancellation and refund policy, please don't hesitate to 
                      contact our support team. We're here to help!
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
