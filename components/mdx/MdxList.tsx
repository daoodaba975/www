interface MdxListProps {
  items: { label: string }[];
}

export default function MdxList({ items }: MdxListProps) {
  return (
    <ul className="list-none my-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
