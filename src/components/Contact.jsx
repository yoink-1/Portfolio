import { useState } from "react";
import { Mail, Phone, MapPin, Send, Info } from "lucide-react";
import Section from "./Section.jsx";
import { profile } from "../data/portfolio.js";
import { LinkedInIcon } from "./BrandIcons.jsx";

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: LinkedInIcon, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedinUrl, external: true },
  { icon: MapPin, label: "Location", value: profile.location },
];

// This site has no backend. The form opens the visitor's email app
// with the message pre-filled, addressed to the email above.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Fill in your name, email and message to continue.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Enter a valid email address, like name@example.com.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <Section
      id="contact"
      title="Contact"
      intro="I'm open to internships in data science, data analytics, AI/ML and general technology roles."
      tone="white"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-3">
          {details.map(({ icon: Icon, label, value, href, external }) => {
            const content = (
              <>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block break-words font-medium text-ink">{value}</span>
                </span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 rounded-xl border border-line bg-paper p-4 transition-colors hover:border-accent"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-xl border border-line bg-paper p-4">{content}</div>
                )}
              </li>
            );
          })}
        </ul>

        <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-line bg-paper p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              Name
              <input type="text" value={form.name} onChange={update("name")} className={inputClass} autoComplete="name" />
            </label>
            <label className="block text-sm font-medium text-ink">
              Email
              <input type="email" value={form.email} onChange={update("email")} className={inputClass} autoComplete="email" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-ink">
            Message
            <textarea rows={5} value={form.message} onChange={update("message")} className={`${inputClass} resize-y`} />
          </label>

          {error && (
            <p role="alert" className="mt-4 text-sm font-medium text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            <Send className="h-4 w-4" aria-hidden="true" /> Send Message
          </button>

          <p className="mt-4 flex gap-2 text-sm text-muted" aria-live="polite">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {opened
              ? `Your email app should now be open with the message ready. If it didn't open, write to ${profile.email} directly.`
              : "Sending opens your email app with this message filled in. Nothing is stored on this website."}
          </p>
        </form>
      </div>
    </Section>
  );
}
