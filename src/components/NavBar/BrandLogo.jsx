import DesignSystem from "../../pages/DesignSystemPage";

export default function BrandLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
      <img
        src="/src/assets/Lex.svg"
        alt="Lex Logo"
        style={{ width: '59px', height: '59px', objectFit: 'contain' }}
        onError={(e) => {
          // Fallback if image path is incorrect
          e.target.style.display = 'none';
        }}
      />
      <span 
        style={{ 
          fontFamily: "'Poppins', sans-serif",
          fontSize: '32px',
          fontWeight: 'bold', 
          whiteSpace: 'nowrap',
          color: '#FFFFFF'
        }}
      >
        Rizal Law Office
      </span>
    </div>
  );
}