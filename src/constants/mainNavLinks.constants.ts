import type { MainNavLink } from "../types/navigation.type";
import { ABOUT, CONTACT, HOMEPAGE } from "./route.constants";

export const mainNavLinks: MainNavLink[] = [
    {
        to: HOMEPAGE,
        item: "Home"
    },
        {
          to: CONTACT,
          item: "Contact",
        },
        {
          to: ABOUT,
          item: "About",
        },
]