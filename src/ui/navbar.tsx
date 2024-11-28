import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Add Task", href: "/add-task" },
  { name: "Team", href: "/team" },
];

export function Navbar() {
  return (
    <ul className="menu menu-horizontal bg-base-200 flex justify-center">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
