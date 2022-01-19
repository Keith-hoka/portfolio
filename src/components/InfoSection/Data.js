export const homeObjOne = {
    to: "/about",
    id: "about",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "About Me",
    headline: "Software Engineer",
    description: "I am a Sydney based Software Engineer with a background in both Mechanical and Electronics Engineering.",
    buttonLabel: "More About",
    imgStart: true,
    img: require("../../images/svg-1.svg").default,
    alt: "About",
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjTwo = {
    to: "/blogs",
    id: "blogs",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "My Blogs",
    headline: "Check out my blogs",
    description: "View my blogs about my life, coding and my learing.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: require("../../images/blogs.svg").default,
    alt: "Blogs",
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjThree = {
    to: "/resume",
    id: "resume",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "My resume",
    headline: "Want to work with me?",
    description: "View and Download my resume and get to know more about me.",
    buttonLabel: "Download",
    imgStart: false,
    img: require("../../images/resume.svg").default,
    alt: "Resume",
    dark: false,
    primary: false,
    darkText: true,
    target: "_blank"
};
