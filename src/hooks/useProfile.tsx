import { Address } from "viem";
import { useEffect, useState } from "react";
import { readInkContract, writeInkContract } from "@/constants/utils";

interface IProfile {
  id: number;
  posts: any[];
  status: number;
  totalTips: number;
  user: Address;
}

const useProfile = (address: Address) => {
  const [regStatus, setStatus] = useState<"NOT_REGISTERED" | "REGISTERED">(
    "NOT_REGISTERED"
  );
  const [profile, setProfile] = useState<IProfile>();

  useEffect(() => {
    const runAsync = async () => {
      try {
        const _profile = await readInkContract("getUser", [address]);
        const { id, posts, status, totalTips, user } = _profile as IProfile;
        setProfile({
          id: Number(id),
          posts,
          status,
          totalTips: Number(totalTips),
          user,
        });
        setStatus("REGISTERED");
      } catch (err) {
        console.log(err);
        setStatus("NOT_REGISTERED");
      }
    };

    runAsync().then((r) => r);
  }, [address]);

  const registerUser = async () => {
    const { hash } = await writeInkContract("register");
    console.log(hash);
  };

  return { regStatus, registerUser, profile };
};

export default useProfile;
