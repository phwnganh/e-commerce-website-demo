import ActiveNavLink from "../ui/ActiveNavLink";
import {
  ABOUT,
  CONTACT,
  HOMEPAGE,
  LOGIN,
} from "../../constants/route.constants";

const MobileMenuModalDialog = ({
  open,
  onClose,
  user,
}: {
  open: boolean;
  onClose: () => void;
  user: any;
}) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black-opacity-40"
      ></div>

      <div
        className="relative z-10 w-full max-w-md bg-white rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-2xl font-bold">Exclusive</h3>
          <button onClick={onClose} className="text-xl leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-4 py-6">
          <ActiveNavLink to={HOMEPAGE} onClick={onClose}>
            Home
          </ActiveNavLink>
          <ActiveNavLink to={CONTACT} onClick={onClose}>
            Contact
          </ActiveNavLink>
          <ActiveNavLink to={ABOUT} onClick={onClose}>
            About
          </ActiveNavLink>
          {!user && (
            <ActiveNavLink to={LOGIN} onClick={onClose}>
              Login
            </ActiveNavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuModalDialog;
