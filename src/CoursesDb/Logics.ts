'use client';

export type Level = "A1" | "B1" | "C1";

export interface CourseLevelData {
    words: string[];
}

export interface CourseData {
    title: string;
    levels: Record<Level, CourseLevelData>;
}

export const courses: Record<string, CourseData> = {
    "wild-animals": {
        title: "Wild animals",
        levels: {
            A1: { words: ["cat", "dog", "bird"] },
            B1: { words: ["raccoon", "fox", "eagle"] },
            C1: { words: ["lynx", "black bear", "bison"] }
        }
    },

    birds: {
        title: "Birds",
        levels: {
            A1: { words: ["sparrow", "duck"] },
            B1: { words: ["owl", "woodpecker"] },
            C1: { words: ["kingfisher", "falcon"] }
        }
    },

    food: {
        title: "Food",
        levels: {
            A1: { words: ["bread", "apple"] },
            B1: { words: ["salad", "pasta"] },
            C1: { words: ["quinoa", "avocado bowl"] }
        }
    },

    "At the airport":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "In the store":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "The ticket booking":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "Technical support":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "At the restaurants":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "About food":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "On excursions":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "Films":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "On the beach":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "Board games":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },
    "Employment":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "At the doctor's office":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },
    Kitchen:{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "In town":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    Art:{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "Part of the body":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    "Gamer's dictionary":{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    Music:{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

    Songs:{
        title:"",
        levels: {
            A1: { words: [""] },
            B1: { words: [""] },
            C1: { words: [""] }
        }
    },

};
