import Button from "../../components/button";

// eslint-disable-next-line react/prop-types
export default function Input({placeholder,textButton,width}) {
  return (
    <>
      <form
        action=""
        className={`relative pr-3 flex-grow ${width? `w-[${width}]` :   " xl:w-[540px]"}`}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="relative w-full pr-16 md:pr-3">
          <input
            type="text"
            className="w-full rounded-xl border-0 py-4 pl-5 md:pr-44 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            placeholder={placeholder}
            value={""}
          />
          <Button
            text={textButton}
            className={
              "absolute flex items-center justify-center right-3 top-0 h-full px-4 md:px-9 py-3 text-base border text-white bg-purple-600  rounded-xlbg-red-500"
            }
          />
        </div>
      </form>
    </>
  );
}
