export default function KalvatProductVisual({ shape = "taper-mug", title = "" }) {
  // Returns appropriate outline drawing for the unfinished steelware product
  const renderShapeSvg = () => {
    switch (shape) {
      case "pot-small":
      case "pot-lb":
      case "pot-medium":
      case "pot-large":
        return (
          <svg viewBox="0 0 100 100" className="kalvat-icon-svg" aria-label={title}>
            {/* Inner Pot Rim */}
            <ellipse cx="50" cy="30" rx="36" ry="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="50" cy="33" rx="32" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
            {/* Belly & Base */}
            <path
              d="M 14 30 C 12 55, 20 80, 50 80 C 80 80, 88 55, 86 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Inner bidding line */}
            <path
              d="M 17 42 C 28 47, 72 47, 83 42"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              opacity="0.5"
            />
          </svg>
        );

      case "jug-set":
      case "water-jug":
      case "jug-lid":
        return (
          <svg viewBox="0 0 100 100" className="kalvat-icon-svg" aria-label={title}>
            {/* Spout and Rim */}
            <ellipse cx="50" cy="24" rx="26" ry="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
            {/* Jug body */}
            <path
              d="M 24 24 C 22 45, 16 65, 30 82 C 40 85, 60 85, 70 82 C 84 65, 78 45, 76 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Spout peak */}
            <path d="M 24 24 L 16 20 L 28 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            {/* Base line */}
            <ellipse cx="50" cy="80" rx="22" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          </svg>
        );

      case "holder-big":
      case "holder-catlari":
      case "holder-small":
      case "holder-round":
        return (
          <svg viewBox="0 0 100 100" className="kalvat-icon-svg" aria-label={title}>
            {/* Top Rim */}
            <ellipse cx="50" cy="22" rx="28" ry="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="50" cy="25" rx="24" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            {/* Cylinder walls */}
            <path d="M 22 22 L 25 80 C 25 84, 75 84, 75 80 L 78 22" fill="none" stroke="currentColor" strokeWidth="2.5" />
            {/* Bottom oval */}
            <ellipse cx="50" cy="80" rx="25" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            {/* Decorative perforations / ring */}
            <line x1="28" y1="45" x2="72" y2="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
            <line x1="28" y1="58" x2="72" y2="58" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
          </svg>
        );

      case "bucket-plain":
      case "bucket-double":
      case "wine-cooler":
      case "champagne-bucket":
      case "bath-bucket":
        return (
          <svg viewBox="0 0 100 100" className="kalvat-icon-svg" aria-label={title}>
            {/* Wide Flared Rim */}
            <ellipse cx="50" cy="24" rx="35" ry="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="50" cy="27" rx="31" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            {/* Tapered sides */}
            <path d="M 15 24 L 27 80 C 27 85, 73 85, 73 80 L 85 24" fill="none" stroke="currentColor" strokeWidth="2.5" />
            {/* Bottom rim */}
            <ellipse cx="50" cy="80" rx="23" ry="4" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
          </svg>
        );

      // Default Tumbler / Taper Mug / Classic Unfinished Shape (matches screenshot)
      default:
        return (
          <svg viewBox="0 0 100 100" className="kalvat-icon-svg" aria-label={title}>
            {/* Top Rim Oval */}
            <ellipse cx="50" cy="26" rx="27" ry="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="50" cy="29" rx="23" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            {/* Tapered Tumbler Body */}
            <path
              d="M 23 26 L 31 78 C 32 83, 68 83, 69 78 L 77 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Bottom Base Rim */}
            <ellipse cx="50" cy="78" rx="19" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
          </svg>
        );
    }
  };

  return (
    <div className="kalvat-visual-box">
      {renderShapeSvg()}
    </div>
  );
}
