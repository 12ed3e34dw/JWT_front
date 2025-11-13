'use client';

import useSWR from 'swr';
import type { StatsResponse } from '@/types/stats';
import { useState } from 'react';

export type Range = 'today' | '7' | '30' | 'all';

const fetcher = (url: string) => fetch(url).then((r) => {
    if (!r.ok) throw new Error('Ошибка загрузки данных');
    return r.json();
});

export function useStats(userId: string, apiBaseUrl = 'http://localhost:3000') {
    const [range, setRange] = useState<Range>('today');

    const { data, error, isLoading } = useSWR<StatsResponse>(
        userId ? `${apiBaseUrl}/stats?userId=${userId}&range=${range}` : null,
        fetcher
    );

    return {
        data,
        error,
        isLoading,
        range,
        setRange,
    };
}
