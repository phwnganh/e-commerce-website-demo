
const SectionHeader = ({title}: {title: string}) => {
    return (
        <div className="flex flex-row gap-4 items-center">
            <div className="bg-button-2 w-5 h-10 rounded-sm"></div>
            <p className="text-button-2 font-semibold text-sm md:text-base">
              {title}
            </p>
          </div>
    );
};

export default SectionHeader;