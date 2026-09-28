import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earnings Privacy Policy - Buzz Research",
  description: "How the Earnings iOS app handles your information.",
};

const EFFECTIVE_DATE = "September 28, 2026";
const CONTACT_EMAIL = "malcolm@buzzmarkets.io";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-bee-yellow mb-3">{title}</h2>
      <div className="space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function EarningsPrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-2">Earnings Privacy Policy</h1>
      <p className="text-gray-500 mb-12">Effective {EFFECTIVE_DATE}</p>

      <Section title="Who we are">
        <p>
          Earnings is an iOS app made by Buzz Research Inc. (&ldquo;we&rdquo;, &ldquo;us&rdquo;), 1111B S
          Governors Ave Ste 20901, Dover, DE 19904, United States. This policy explains what
          information the app handles, why, and the choices you have.
        </p>
      </Section>

      <Section title="Information we collect">
        <p>
          <strong className="text-white">Account information.</strong> When you sign up, you give us
          your email address (or, if you use Sign in with Apple, the email Apple shares with us, which
          may be a private relay address). We use it to create your account and sign you in.
        </p>
        <p>
          <strong className="text-white">Wallet address.</strong> Signing up creates a self-custodial
          wallet for you. We see its public address so the app can show your balances, positions and
          history. We never hold your funds, and we can&rsquo;t move them without your approval in the app.
        </p>
        <p>
          <strong className="text-white">Trading activity.</strong> Deposits, trades and withdrawals are
          sent to public blockchains (Arbitrum and Hyperliquid). Transactions on those networks are
          public and permanent by design, and anyone can see them together with your wallet address.
          The app reads this public data to show you your account.
        </p>
        <p>
          <strong className="text-white">Notifications.</strong> If you turn on notifications, Apple
          gives the app a device token so we can send alerts, such as reminders for earnings you
          follow. You can turn notifications off at any time in iOS Settings.
        </p>
        <p>
          <strong className="text-white">Profile preferences.</strong> A display name, avatar color and
          app settings you choose are stored on your device.
        </p>
      </Section>

      <Section title="Information that stays on your device">
        <p>
          <strong className="text-white">Face ID.</strong> If you enable Face ID to unlock the app, iOS
          handles the check. We never receive your biometric data.
        </p>
        <p>
          <strong className="text-white">Photos.</strong> If you save a trade card, the app asks for
          permission to <em>add</em> the image to your photo library. It can&rsquo;t read your existing
          photos.
        </p>
      </Section>

      <Section title="Service providers">
        <p>We rely on a few providers to run the app. Each handles data under its own privacy policy:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Privy</strong>: sign-in and wallet infrastructure (email,
            wallet address, and the security of your wallet keys).
          </li>
          <li>
            <strong className="text-white">Hyperliquid and Arbitrum</strong>: the public networks where
            your trades and transfers settle.
          </li>
          <li>
            <strong className="text-white">Apple</strong>: Sign in with Apple, push notifications, and
            app distribution.
          </li>
          <li>
            <strong className="text-white">Payment providers</strong>: if you add money with a card or
            Apple Pay, a third-party provider (such as MoonPay) processes the payment and may ask you to
            verify your identity. That information goes directly to them, not to us.
          </li>
        </ul>
      </Section>

      <Section title="What we don't do">
        <p>
          We don&rsquo;t sell your personal information. We don&rsquo;t show ads, and we don&rsquo;t track
          you across other companies&rsquo; apps or websites. If we add analytics to improve the app, we
          will update this policy first.
        </p>
      </Section>

      <Section title="Retention and deletion">
        <p>
          We keep your account information while your account is active. To delete your account, email
          us at <a className="text-bee-yellow underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
          and we&rsquo;ll delete your account data within 30 days. Activity already recorded on public
          blockchains can&rsquo;t be erased by anyone, including us. Your wallet and any funds in it stay
          yours.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          Depending on where you live, you may have the right to access, correct, export or delete your
          personal information. Email us and we&rsquo;ll respond within 30 days.
        </p>
      </Section>

      <Section title="Children">
        <p>Earnings is not intended for anyone under 18, and we don&rsquo;t knowingly collect their information.</p>
      </Section>

      <Section title="Changes">
        <p>
          If we change this policy, we&rsquo;ll update the effective date above and, for significant
          changes, let you know in the app.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions? Email{" "}
          <a className="text-bee-yellow underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </Section>
    </main>
  );
}
