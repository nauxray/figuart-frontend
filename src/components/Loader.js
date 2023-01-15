const Loader = ({ className: classnames = "", small = false }) => {
  return (
    <div
      className={
        "rounded-[50%] border-t-transparent border-lilac animate-spin bg-transparent " +
        classnames +
        (small ? " w-8 h-8 border-2" : " w-14 h-14 border-4")
      }
    />
  );
};

export default Loader;
