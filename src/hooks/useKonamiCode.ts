import { useState, useEffect } from 'react';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export const useKonamiCode = () => {
    const [success, setSuccess] = useState(false);
    const [input, setInput] = useState<string[]>([]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const newInput = [...input, e.key];

            // Keep only the last N keys where N is the length of the Konami code
            if (newInput.length > KONAMI_CODE.length) {
                newInput.shift();
            }

            setInput(newInput);

            if (newInput.length === KONAMI_CODE.length &&
                newInput.every((key, index) => key.toLowerCase() === KONAMI_CODE[index].toLowerCase())) {
                setSuccess(prev => !prev);
                setInput([]); // Reset after success to allow toggling
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [input]);

    return success;
};
