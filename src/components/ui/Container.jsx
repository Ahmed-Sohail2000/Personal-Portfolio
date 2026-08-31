const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[71.25rem] px-6 sm:px-10 ${className}`}>
    {children}
  </div>
);

export default Container;
