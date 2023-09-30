import { readContract, writeContract } from "@wagmi/core";
import { inkContract } from "@/constants/adresses";
import inkAbi, { inkFns } from "@/abis/InkSocial";

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
