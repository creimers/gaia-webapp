"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ROUTES } from "@/lib/constants";

export default function NavDesktop() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {ROUTES.map((item) => {
          const active =
            item.pathname == "/"
              ? pathname === item.pathname
              : pathname.startsWith(item.pathname);
          return (
            <NavigationMenuItem key={item.title}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger
                    className={cn(active && "bg-lime-600 text-white")}
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 space-y-3 relative w-full">
                      {item.children.map((child) => (
                        <li key={child.title} className="w-full">
                          <Link href={child.pathname} legacyBehavior passHref>
                            <NavigationMenuLink
                              active={pathname === child.pathname}
                              className={cn(navigationMenuTriggerStyle())}
                            >
                              {child.title}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.pathname} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      active && "bg-lime-600 text-white"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        {ROUTES.map((route) => {
          const active = route.pathname === pathname;
          if (route.children) {
            return <div key={route.title}>ding dong</div>;
          } else {
            return (
              <li key={route.title}>
                <Link
                  href={route.pathname}
                  className={cn(
                    active
                      ? "bg-lime-600 text-white rounded"
                      : "hover:underline",
                    "font-semibold px-3 py-2"
                  )}
                >
                  {route.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
