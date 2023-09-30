import { IPost } from "@/components/Timeline";
import Use$Tip from "@/hooks/use$Tip";
import React, { FC, useState } from "react";
import {parseEther} from "viem";

const TipInput: FC<{ post: IPost }> = ({ post }) => {
  const [showTip, setShowTip] = useState(false);
  const [tipAmount, setTipAmount] = useState("");
  const { tipUser } = Use$Tip();

  const handleSendTip = async () => {
    if (tipAmount.length === 0) return;
    try {
      const hash = await tipUser(post.poster, tipAmount)
      console.log(hash);
      setShowTip(false)
      setTipAmount("")
      
    } catch (error) {
      console.log(error); 
    }
    
  };

  return (
    <div>
      <button
        className="border-2 border-gray-100 text-sm px-2 rounded-lg mr-4 hover:scale-x-110"
        onClick={(e) => setShowTip(true)}
      >
        Tip
      </button>
      <div
        className={`${
          showTip ? "block" : "hidden"
        } absolute right-0 top-full py-2 px-3 border-2 border-gray-100 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm grid gap-2`}
      >
        <input
          type="number"
          step={0.01}
          value={tipAmount}
          onChange={(e) => setTipAmount(e.target.value)}
          className="rounded text-black p-2"
        />
        <button className="bg-gray-700 rounded" onClick={handleSendTip}>
          Send Tip
        </button>
      </div>
    </div>
  );
};

export default TipInput;
