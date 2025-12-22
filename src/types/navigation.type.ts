export type NavIcon = {
  icon: string;
  alt: string;
  getTo: (isLoggedIn: boolean) => string;
  getCount?: () => number;
  requireAuth?: boolean;
};

export type MainNavLink = {
  to: string;
  item: string;
};
