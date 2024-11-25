import Link from "next/link";

const navItems = [
  { name: "Tasks", href: "/" },
  { name: "Add Task", href: "/add-task" },
];

export function Navbar() {
  return (
    <ul>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
