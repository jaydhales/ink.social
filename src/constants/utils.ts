import { readContract, writeContract } from "@wagmi/core";
import { inkContract, inkTokenContract } from "@/constants/adresses";
import inkAbi, { inkFns } from "@/abis/InkSocial";
import $Ink from "@/abis/$Ink";
import { IPost } from "@/components/Timeline";

export const readInkContract = async (functionName: inkFns, args: any[] = []) =>
  await readContract({
    address: inkContract,
    abi: inkAbi,
    functionName,
    args,
  });

export const writeInkContract = async (
  functionName: inkFns,
  args: any[] = []
) =>
  await writeContract({
    address: inkContract,
    abi: inkAbi,
    functionName,
    args,
  });

export const write$TipContract = async (functionName: any, args: any[] = []) =>
  await writeContract({
    address: inkTokenContract,
    abi: $Ink,
    functionName,
    args,
  });

export const formatPost = (po: any): IPost => ({
  ...po,
  id: Number(po.id),
  timePosted: Number(po.timePosted),
  tips: Number(po.tips),
});
