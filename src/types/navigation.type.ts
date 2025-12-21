export type NavIcon = {
      icon: string;
      alt: string
      getTo: (isLoggedIn: boolean) => string
      getCount?: () => number
      requireAuth?: boolean
}