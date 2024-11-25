import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Add Task", href: "/add-task" },
];

export function Navbar() {
  return (
    <ul className="flex space-x-4">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
