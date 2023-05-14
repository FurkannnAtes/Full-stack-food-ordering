import { Button } from "antd";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const FoodCard = () => {
  return (
    <div className="w-full flex flex-col rounded-3xl   bg-black2 group max-w-[400px] mx-auto">
      <div className="bg-grey4 w-full h-[200px] flex items-center justify-center rounded-t-2xl rounded-bl-[100px] ">
        <div className="w-[150px] aspect-[3/2] relative group-hover:scale-125 duration-300">
          <Image fill src="/assets/hamburger.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5 text-white text-xl">
        <div>Title</div>
        <div>
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </div>
        <div className="flex items-center justify-between">
          <div>$20</div>
          <Button
            shape="circle"
            className="bg-yellow text-white   items-center justify-center flex"
            type="button"
            size="large"
            icon={<FiShoppingCart className="fill-white" />}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
