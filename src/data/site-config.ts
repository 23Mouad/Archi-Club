export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'Ovidius logo'
    },
    title: 'Ovidius',
    description: 'Astro.js and Tailwind CSS theme for blogging by justgoodui.com',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Go to GitHub repo',
            href: 'https://github.com/',
            icon: 'github'
        },
        {
            text: 'Follow on Instagram',
            href: 'https://instagram.com/',
            icon: 'instagram'
        },
        {
            text: 'Follow on X',
            href: 'https://twitter.com/',
            icon: 'x-twitter'
        }
    ],
    hero: {
        title: 'Hi there!',
        text: "My name is Justin Case. I'm a freelance front-end developer, author and speaker based in Austin, TX. It's nice to meet you.",
        avatar: {
            src: '/avatar.jpg',
            alt: 'Justin Case'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    },
    subscribe: {
        title: 'Subscribe to Ovidius Newsletter',
        text: 'One update per week. All the latest news directly in your inbox.',
        formUrl: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0'
    },
    postsPerPage: 5
};

export default siteConfig;
