interface MdxListIconProps {
  items: { label: string; icon?: string }[];
}

export default function MdxListIcon({ items }: MdxListIconProps) {
  return (
    <ul className="list-none my-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-lg">{item.icon ?? "🔹"}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
