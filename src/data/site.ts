import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image";
// @ts-ignore
import image from "../assets/social.png";
// @ts-ignore
import pic from "../assets/me.png";

export interface Author {
    firstname: string;
    bio: string;
    profilePic: ImageMetadata;
    os?: string;
    shell?: string;
    lastname: string;
    socials: Socials[];
}

export interface Socials {
    name: string;
    link: string;
}

export interface Site {
    lang: string;
    rssTitle: string;
    siteName: string;
    title: string;
    description: string;
    image: ImageMetadata;
    twitterCreator: string;
    author: Author;
}

export const site: Site = {
    lang: "en",
    rssTitle: "Mario blog posts",
    siteName: "NetworkMario",
    title: "Welcome to my website.",
    description:
        "This is my personal website, where I post news and some other cool stuff.",
    image: image,
    twitterCreator: "",
    author: {
        os: "ArchLinux",
        profilePic: pic,
        shell: "Zsh",
        bio: "Hi, I'm Mario, a technology enthusiast. I love exploring the world of programming and closely following the latest technology trends. With the combination of creativity and technical skill, I am always looking for new challenges and exciting projects. Welcome to my digital world!",
        firstname: "Mario",
        lastname: "Montella",
        socials: [
            {
                name: "github",
                link: "https://github.com/mariomontella",
            },
        ],
    },
};
