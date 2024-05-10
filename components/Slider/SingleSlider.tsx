import { Slider } from "@/types/slider";
import Image from "next/image";

const SingleSlider = ({ review }: { review: Slider }) => {
  const { image } = review;
  return (
    <>
      <div className=" mx-auto w-full rounded-lg bg-white p-9 pt-1.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
        {/* <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark"> */}
        <div>
          {/* <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p> */}
        </div>
        <Image
          width={1800}
          height={100}
          className=""
          src={image}
          alt={"name"}
        />
        {/* </div> */}

        {/* <p>{content}</p> */}
      </div>
    </>
  );
};

export default SingleSlider;
