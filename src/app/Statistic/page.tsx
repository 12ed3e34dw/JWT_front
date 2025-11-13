'use client';
import Stats from "@/Statistic/hooks/useStats";
export default function Page() {

return (
    <>
        <Stats userId="1" apiBaseUrl="http://localhost:3000" />
    </>
)
}
