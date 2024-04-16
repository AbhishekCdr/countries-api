export const Navbar = () => {
  return (
    <div className="w-full h-20 shadow-md flex-row items-center px-5 font-customFont flex justify-between lg:px-10 text-lg">
      <div className="font-[800]">Where in the World</div>
      <button className="flex flex-row gap-1 font-semibold text-base">
        <img src="/dark.svg" alt="" />
        <span>Dark Mode</span>
      </button>
    </div>
  );
};
