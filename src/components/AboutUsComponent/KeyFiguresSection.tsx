import CustomRoundedComponent from "../ui/CustomRoundedComponent";
import ShoppingBagIcon from "../../assets/Icon-Shopping bag.svg";
import ShopIcon from "../icons/ShopIcon";
import SalesIcon from "../icons/SalesIcon";
import MoneyBagIcon from "../icons/MoneyBagIcon";
const KeyFiguresSection = () => {
  const KEY_FIGURES = [
    {
      value: "10.5k",
      label: "Sallers active our site",
      icon: <ShopIcon />,
    },
    {
      value: "33k",
      label: "Mopnthly Produduct Sale",
      icon: <SalesIcon />,
    },
    {
      value: "45.5k",
      label: "Customer active in our site",
      icon: (
        <img
          src={ShoppingBagIcon}
          alt="shopping-bag-icon"
          className=" group-hover:brightness-1"
        />
      ),
    },
    {
      value: "25k",
      label: "Anual gross sale in our site",
      icon: <MoneyBagIcon />,
    },
  ];
  return (
    <section className="mt-35 grid grid-cols-2 md:grid-cols-4 gap-7.5">
      {KEY_FIGURES.map((figure, index) => (
        <div
          key={index}
          className="border border-black-opacity-30 flex justify-center items-center rounded-sm group hover:bg-button-2 hover:border-button-2 hover:shadow-[0_2px_10px_2px_#00000033]"
        >
          <div className="flex flex-col gap-3 items-center px-2 sm:px-0 py-7.5">
            <div className="mb-3">
              <CustomRoundedComponent>{figure.icon}</CustomRoundedComponent>
            </div>

            <h1 className="font-bold text-xl md:text-3xl text-center md:text-start group-hover:text-white">
              {figure.value}
            </h1>
            <p className="group-hover:text-white text-sm md:text-base">
              {figure.label}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default KeyFiguresSection;
