export default function SmiLogo({ className = "", light = false }) {
  return (
    <div className={`brand-logo ${className}`}>
      <svg
        className="brand-logo-icon"
        viewBox="0 0 110 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="smiTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
        {/* S */}
        <path
          d="M26 14 C16 11 8 16 8 23 C8 32 28 29 28 39 C28 46 19 49 10 46"
          stroke="url(#smiTeal)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* M */}
        <path
          d="M38 46 V14 L52 35 L66 14 V46"
          stroke="url(#smiTeal)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* I */}
        <path
          d="M78 14 V46"
          stroke="url(#smiTeal)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Dot */}
        <circle cx="90" cy="16" r="3.5" fill="#f59e0b" />
      </svg>
      <div className="brand-text">
        <span className={`brand-title ${light ? "brand-title-light" : ""}`}>
          SS METAL
        </span>
        <span className="brand-sub">INDUSTRIES • EST. 1980</span>
      </div>
    </div>
  );
}
