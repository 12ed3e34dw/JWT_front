import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
export const checkUserStreak = (userId: string) => {
    let lastVisits = JSON.parse(localStorage.getItem("lastVisits") || "[]");
    const today = new Date().toISOString().split("T")[0];

    if (!lastVisits.includes(today)) {
        lastVisits.push(today);
        if (lastVisits.length > 3) lastVisits.shift(); // храним только последние 3 дня
        localStorage.setItem("lastVisits", JSON.stringify(lastVisits));
    }

    if (isThreeDaysConsecutive(lastVisits))
    {
        toast.success("Поздравляем! Вы заходите 3 дня подряд!🎉")
        axios.post("http://localhost:3001/user/streak", { userId, streak: 3 });
    }
};

const isThreeDaysConsecutive = (dates: string[]) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const dayBefore = new Date(today);
    dayBefore.setDate(today.getDate() - 2);

    const format = (d: Date) => d.toISOString().split("T")[0];

    return dates.includes(format(today)) && dates.includes(format(yesterday)) && dates.includes(format(dayBefore));
};
