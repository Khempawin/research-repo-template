import type { NavItem } from "../interfaces/research-page";

interface TopbarProps {
  items: NavItem[];
  title: string;
}

export function Topbar({ items, title }: TopbarProps) {
  return (
    <nav className="topbar" aria-label="Project sections">
      <a className="brand" href="#">
        {title}
      </a>
      <div className="navLinks">
        {items.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

