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
    }





};
