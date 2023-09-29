"use client";

import { List } from "@phosphor-icons/react";
export default function NavMobile() {
  return (
    <nav className="md:hidden flex items-center">
      <button>
        <List className="w-8 h-8" />
      </button>
    </nav>
  );
}
