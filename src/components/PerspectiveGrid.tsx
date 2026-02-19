const PerspectiveGrid = () => {
  const vpX = 500; // vanishing point X (centered in 1000-wide viewBox)
  const vpY = 670; // ~67% down

  const horizontalLines = [];
  const verticalLines = [];

  // Horizontal lines - spaced in perspective
  for (let i = 0; i < 10; i++) {
    const t = i / 9;
    const worldY = vpY + (1000 - vpY) * Math.pow(t, 1.5);
    const spread = (worldY - vpY) / (1000 - vpY);
    const opacity = 0.05 + spread * 0.17;
    const x1 = vpX - spread * 1000;
    const x2 = vpX + spread * 1000;

    horizontalLines.push(
      <line
        key={`h-${i}`}
        x1={x1}
        y1={worldY}
        x2={x2}
        y2={worldY}
        stroke="#111D13"
        strokeWidth="1"
        opacity={opacity}
      />
    );
  }

  // Vertical lines fanning from vanishing point
  for (let i = 0; i < 16; i++) {
    const t = (i / 15) * 2 - 1; // -1 to 1
    const bottomX = vpX + t * 1000;
    const opacity = 0.08 + Math.abs(t) * 0.12;

    verticalLines.push(
      <line
        key={`v-${i}`}
        x1={vpX}
        y1={vpY}
        x2={bottomX}
        y2={1000}
        stroke="#111D13"
        strokeWidth="1"
        opacity={opacity}
      />
    );
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {horizontalLines}
      {verticalLines}
    </svg>
  );
};

export default PerspectiveGrid;
