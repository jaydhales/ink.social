import React, { useEffect, useState } from "react";
import usePosts from "@/hooks/usePosts";
import { Address } from "viem";
import Avatar from "boring-avatars";
import { formatDate, shortenAccount } from "@/utils";
import Link from "next/link";
import TipInput from "@/components/TipInput";

export interface IPost {
  content: string;
  id: number;
  poster: Address;
  timePosted: number;
  tips: number;
}

const Timeline = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const { getAllPosts } = usePosts();

  useEffect(() => {
    getAllPosts(0, 11)
      .then((data) => setPosts(data!))
      .catch((err) => err);
  }, []);
  return (
    <div>
      <p>Inkers on Deck!!!</p>
      <div className="grid gap-4 max-w-2xl mx-auto">
        {posts.map((post) => {
          if (post.poster === "0x0000000000000000000000000000000000000000")
            return;
          return (
            <div
              className="border-2 border-gray-300 rounded-lg py-4 px-2 text-white"
              key={post.id}
            >
              <div className="flex justify-between items-center mb-4 relative">
                <Link
                  href={`/user/${post.poster}`}
                  className="flex items-center gap-2"
                >
                  <Avatar name={post.poster} size={50} />
                  <div>
                    <p className="font-black">{shortenAccount(post.poster)}</p>
                    <p className={"text-[12px] font-black"}>
                      {formatDate(post.timePosted)}
                    </p>
                  </div>
                </Link>

                <TipInput post={post} />
              </div>
              <Link
                href={`posts/${post.id}`}
                className={
                  "block text-lg mx-2 px-2 py-1 border border-gray-900 rounded"
                }
              >
                {post.content}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
