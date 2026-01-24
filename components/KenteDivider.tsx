/**
 * KenteDivider - A decorative divider inspired by Kente cloth weaving patterns
 * Used to separate sections with African-inspired visual elements
 */
export default function KenteDivider() {
  return (
    <div className="kente-divider">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-red via-green to-blue"></div>
      <div className="absolute top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue via-green via-red to-gold opacity-50"></div>
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gold"></div>
    </div>
  );
}
