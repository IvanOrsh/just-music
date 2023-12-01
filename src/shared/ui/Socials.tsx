import Link from "next/link";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  {
    id: 1,
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    id: 2,
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    id: 3,
    path: "#",
    icon: <RiSpotifyFill />,
  },
  {
    id: 4,
    path: "#",
    icon: <RiSoundcloudFill />,
  },
];

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social) => (
        <Link key={social.id} href={social.path}>
          <div className={`${iconStyles}`}>{social.icon}</div>
        </Link>
      ))}
    </div>
  );
}
