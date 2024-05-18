import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="container flex py-4 justify-between ">
        <h1 className="h-7 text-lg font-bold">
            G5 Store
        </h1>

        <ul className="flex items-center gap-4">
            <li>
                <Link href="/" className="text-sm  font-semibold text-primary">
                    Productos
                </Link>
            </li>
            <li>
                <ModeToggle />
            </li>
        </ul>
    </nav>
  )
}
