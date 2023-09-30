import { Address, parseEther } from "viem";
import { read$TipContract, write$TipContract } from "@/constants/utils";
import { useAccount } from "wagmi";
import { inkContract } from "@/constants/adresses";

const Use$Tip = () => {
  const { address: owner } = useAccount();

  const tipUser = async (to: Address, amount: string) => {
    const amountToSend = parseEther(amount);
    const txnHashes = [];
    try {
      const allowance = await read$TipContract("allowance", [
        owner,
        inkContract,
      ]);

      const transfer$Tip = async () => {
        const { hash } = await write$TipContract("transferFrom", [
          owner,
          inkContract,
          amountToSend,
        ]);
        return hash;
      };

      if (String(allowance) >= String(amountToSend)) {
        return txnHashes.push(await transfer$Tip());
      } else {
        const { hash } = await write$TipContract("approve", [
          owner,
          inkContract,
          amountToSend,
        ]);

        txnHashes.push(hash);
        return txnHashes.push(await transfer$Tip());
      }
      
    } catch (err) {
      console.log(err);
    }
  };
  return { tipUser };
};

export default Use$Tip;
