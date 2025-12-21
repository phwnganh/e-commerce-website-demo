import { NavLink } from "react-router-dom";
import IconBadge from "../ui/IconBadge";

const NavIconButton = ({
  to,
  icon,
  alt,
  badgeCount = 0,
  showBadge = false,
  onClick
}: {
  to: string;
  icon: string;
  alt: string;
  badgeCount?: number;
  showBadge?: boolean;
  onClick?: () => void
}) => {
  return (
    <NavLink to={to} className="relative rounded-full" onClick={onClick}>
      <img src={icon} alt={alt} />
      {showBadge && <IconBadge count={badgeCount} hideIfZero />}
    </NavLink>
  );
};

export default NavIconButton;
