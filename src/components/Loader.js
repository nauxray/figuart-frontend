const Loader = ({ className: classnames = "" }) => {
  return (
    <div
      className={
        ("w-14 h-14 rounded-[50%] border-4 border-t-transparent border-lilac animate-spin bg-black",
        classnames)
      }
    />
  );
};

export default Loader;
