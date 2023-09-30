import { Address, parseEther } from "viem";
import { write$TipContract } from "@/constants/utils";

const Use$Tip = () => {
  const tipUser = async (addr: Address, amount: string) => {
    try {
      const { hash } = await write$TipContract("transfer", [
        addr,
        parseEther(amount),
      ]);

      return hash;
    } catch (err) {
      console.log(err);
    }
  };
  return { tipUser };
};

export default Use$Tip;
