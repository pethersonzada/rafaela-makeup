import { trustItems } from "@/lib/content";

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="border-y border-line bg-surface">
      <ul className="mx-auto grid max-w-6xl gap-x-8 gap-y-3 px-5 py-6 text-center text-sm sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <li key={item} className="flex items-center justify-center gap-2">
            <span aria-hidden="true" className="text-accent">
              ✦
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
