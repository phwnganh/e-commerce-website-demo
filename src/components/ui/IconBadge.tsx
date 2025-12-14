const IconBadge = ({
  count,
  hideIfZero,
}: {
  count: number;
  hideIfZero?: boolean;
}) => {
  if (hideIfZero && count <= 0) return null;
  const displayCount = count > 99 ? "99+" : count;
  return (
    <div className="absolute right-0 top-0 rounded-full w-4 h-4 bg-button-2 text-text-1 flex justify-center items-center text-xs">
      {displayCount}
    </div>
  );
};

export default IconBadge;
