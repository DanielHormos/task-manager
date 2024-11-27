import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Add-Task", href: "/add-task" },
];

export function Navbar() {
  return (
    <ul className="flex gap-4 bg-gray-800 text-white py-4 justify-center items-center">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-white hover:text-gray-300 rounded-md text-lg font-medium"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
