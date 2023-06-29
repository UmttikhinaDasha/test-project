import { useEffect, useState } from 'react';

/**
 * Добавление Задержки для показателя закрузки на 5 секунт.
 * @param loading - Текущий показатель загрузки.
 */
export const useDelayedLoading = (loading: boolean): boolean => {
    const [delayedLoading, setDelayedLoading] = useState(true);

    useEffect(() => {
        setDelayedLoading(true);

        const onTimeout = (): void => {
            setDelayedLoading(loading);
        };

        const timeoutId = setTimeout(onTimeout, 5000);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [loading]);

    return delayedLoading;

};
