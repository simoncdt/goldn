// eslint-disable-next-line react/prop-types
export default function Button({ text, className }) {
    return (
      <button className={`mx-auto text-white  rounded-lg px-10 py-5 text-base  ${className}`}>
        {text}
      </button>
    );
  }
  