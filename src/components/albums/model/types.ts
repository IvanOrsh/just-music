import { z } from "zod";

const TrackData = z.object({
  name: z.string(),
  src: z.string(),
});

const AlbumData = z.object({
  id: z.number(),
  img: z.string(),
  name: z.string(),
  tracks: z.array(TrackData),
});

const AlbumsData = z.array(AlbumData);

type Album = z.infer<typeof AlbumData>;
type Albums = z.infer<typeof AlbumsData>;

export { AlbumsData, type Albums };
