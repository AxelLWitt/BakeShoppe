
export default function Horizontal() {
  const items = [
    { src: '/images/Babka.png', label: 'Babka' },
    { src: '/images/Baguette.png', label: 'Baguette' },
    { src: '/images/Cookies.png', label: 'Cookies' },
    { src: '/images/Buns.png', label: 'Buns' }
  ];

  return (
    <div className="scroll-container">
      {items.map((item, idx) => (
        <div key={idx} className="scroll-item">
          <img src={item.src} alt={item.label} className="scroll-image" />
          <div className="scroll-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
