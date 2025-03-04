import OverIcon from "./OverIcon";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <div className="relative">
        <div className="">{children}</div>
        <OverIcon />
      </div>
    </>
  );
}
