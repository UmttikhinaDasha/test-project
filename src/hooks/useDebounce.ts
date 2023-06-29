import { useEffect, useState } from 'react';

/**
 * Добавление задержки при изменении значения.
 * @param value - Значение.
 * @param delay - Задержка в миллисекундах.
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
