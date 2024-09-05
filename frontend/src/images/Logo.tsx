import log from "../../public/Logo-1.svg";

export const Logo = () => {
  return (
    <div>
      <img src={log.src} alt="logo" height={80} width={80} />
    </div>
  );
};
