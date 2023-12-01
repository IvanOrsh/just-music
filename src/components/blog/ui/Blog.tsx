import { ZodError } from "zod";

import SectionHeader from "@/shared/ui/SectionHeader";
import PostList from "./PostList";
import { PostsData, type Post } from "../model/types";

const getPosts = async (): Promise<Post[] | undefined> => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const obj: Post[] = PostsData.parse(await response.json());
    return obj;
  } catch (error) {
    if (error instanceof ZodError) {
      // TODO: toast maybe?
      console.log(error.issues);
    } else {
      console.log(error);
    }
  }
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section className="section" id="blog">
      <div className="container mx-auto space-y-8">
        <SectionHeader pretitle="Our Blog" title="Latest News" />

        {/* post list */}
        {!posts || posts?.length === 0 ? (
          <div>
            <h2 className="text-2xl text-center text-accent font-bold">
              No posts
            </h2>
          </div>
        ) : (
          <PostList posts={posts} />
        )}
      </div>
    </section>
  );
}
