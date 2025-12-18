const UserDropdownItem = ({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`flex flex-row items-center gap-4 py-0.5 group hover:bg-black/10`}
    >
      <div className="w-6 h-6 flex justify-center items-center">
        <img src={icon} alt={label} className="group-hover:brightness-1" />
      </div>
      <p className="text-sm group-hover:text-black">{label}</p>
    </div>
  );
};

export default UserDropdownItem;
