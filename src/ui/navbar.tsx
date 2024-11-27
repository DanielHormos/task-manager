import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Add Task", href: "/add-task" },
  { name: "Team", href: "/" },
];

export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Task Manager
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
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
      <div className="navbar-end">
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}
