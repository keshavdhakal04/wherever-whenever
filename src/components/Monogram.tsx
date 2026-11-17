/** A small crown-and-dial mark: a ring, a centre pin and a single index at twelve. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1" />
      <path d="M16 2.5v5" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="16" r="2" fill="#8C6D43" />
    </svg>
  );
}
