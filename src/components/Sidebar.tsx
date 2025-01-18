"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <nav className="space-y-1">
        <Link
          href="/"
          className={`flex items-center px-4 py-2 rounded-md group ${
            pathname === "/" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-sm font-medium">Analytics</span>
        </Link>
        <Link
          href="/clients"
          className={`flex items-center px-4 py-2 rounded-md group ${
            pathname === "/clients" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-sm font-medium">Clients</span>
        </Link>
      </nav>
    </aside>
  );
}
