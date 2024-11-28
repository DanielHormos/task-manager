import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Add Task", href: "/add-task" },
  { name: "Team", href: "/team" },
];

export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <ul className="menu menu-horizontal px-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="btn btn-ghost">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
