"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { type Post } from "../model/types";
import { fadeIn } from "@/shared/variants";

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  const firstThreePosts = posts.slice(0, 3);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10">
        {firstThreePosts.map((post) => (
          <div key={post.id} className="flex-1">
            {/* date */}
            <div className="text-accent font-bold mb-1">{post.date}</div>

            {/* title */}
            <div className="text-xl font-medium mb-4">{post.title}</div>

            {/* description */}
            <p className="text-white/30 mb-6 font-light">{post.description}</p>

            <Link href="#" className="flex items-center gap-x-2 group">
              Read more
              <BsArrowRight className="text-xl group-hover:ml-1 transition-all" />
            </Link>
          </div>
        ))}
      </div>

      <button className="btn btn-lg btn-accent">View all posts</button>
    </motion.div>
  );
}
