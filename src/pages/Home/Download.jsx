export default function Download() {
  return (
    <>
      <div className="">
        <div className="justify-between  w-full py-11 mx-auto">
          <div className="grid grid-cols-3 w-full relative h-52 rounded-xl bg-[#D6BE82]">
            <div className="pl-24">
              <img
                className=" absolute z-10  bottom-0"
                src={"https://static.gold.fr/images/iphone_app.png"}
                alt=""
              />
            </div>
            <div className=" col-span-2">
              <div className="font-bold my-6 text-3xl">
                Venez découvrir notre application mobile
              </div>
              <div className="text-3xl font-bold  mb-3  flex gap-8 pl-5">
                {" "}
                <button className="">
                  <img
                    src="/appStore.svg"
                    alt=""
                    className="w-56"
                  />
                </button>
                <button>
                  <img
                    src="/GoogleStore.svg"
                    alt=""
                    className="w-56"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
