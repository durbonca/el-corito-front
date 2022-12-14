export const Logo = ({ href, logo, alt, className }) => {
  return (
    <a
      href={href}
      className="flex items-center w-16 h-16 mx-2.5"
      target="_blank"
      rel="noreferrer"
    >
      <img className={className} src={logo} alt={alt} />
    </a>
  );
};
