
const Loader = ({ fullScreen }) => {
  return (
    <div className={`flex ${fullScreen === true ? 'h-screen' : 'h-full'} items-center justify-center`}>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-[#388a83] border-t-transparent"></div>
    </div>
  );
};

export default Loader;

