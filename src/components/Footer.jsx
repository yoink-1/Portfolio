import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#home" className="hover:text-accent">Back to top</a>
      </div>
    </footer>
  );
}
