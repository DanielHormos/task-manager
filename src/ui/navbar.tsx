import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Add Task", href: "/add-task" },
  { name: "Team", href: "/team" },
];

export function Navbar() {
  return (
    <ul className="menu menu-vertical rounded-box">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="btn btn-ghost">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
