import { z } from "zod";

const PostData = z.object({
  id: z.number(),
  date: z.string(),
  title: z.string(),
  description: z.string(),
});

const PostsData = z.array(PostData);

type Post = z.infer<typeof PostData>;
type Posts = z.infer<typeof PostsData>;

export { PostsData, type Post };
