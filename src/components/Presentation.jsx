/* eslint-disable react/prop-types */
import Button from "./button";
import Wrapper from "./Wrapper";

export default function Presentation({ presentationInfo }) {
  return (
    <>
      <Wrapper>
        <div className="grid grid-cols-12 bg-[#F2F4F7]">
          <div className="col-span-7 px-12 py-16">
            <div className="text-3xl mb-5">
              {" "}
              <strong>{presentationInfo.title}</strong>
            </div>
            <div>{presentationInfo.content}</div>
            {presentationInfo.button ? (
              <div className="mt-16 mb-7">
                <Button
                  link={presentationInfo.link}
                  text={presentationInfo.button}
                  className={"bg-[#8F7130]"}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
