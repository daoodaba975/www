interface MdxListIconProps {
  items: { label: string; icon?: string }[];
}

export default function MdxListIcon({ items }: MdxListIconProps) {
  return (
    <ul className="list-none my-2">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-2">
          <span className="text-lg" aria-hidden="true">
            {item.icon ?? "🔹"}
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
