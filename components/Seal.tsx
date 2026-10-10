export default function Seal({ size = 40 }: { size?: number }) {
  return (
    <span className="seal" style={{ width: size, height: size, fontSize: size * 0.4 }} aria-hidden="true">
      <span>千</span>
      <span>帆</span>
    </span>
  );
}
