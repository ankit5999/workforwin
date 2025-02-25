import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useRef } from 'react';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const smoothScroll = (id: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
};


// useElementPosition


export function useElementPosition<T extends HTMLElement>() {
    const [height, setHeight] = useState(0);
    const [top, setTop] = useState(0);
    const elementRef = useRef<T | null>(null);  // Ref to the element you want to track

    // Function to update height and top position
    const updateDimensions = () => {
        if (elementRef.current) {
            // Using clientHeight to get the height excluding padding and border
            const rect = elementRef.current.getBoundingClientRect();
            setHeight(rect.height);  // Update height with clientHeight
            setTop(rect.top);        // Update top position
        }
    };

    useEffect(() => {
        // Initially update dimensions
        updateDimensions();

        // Re-run the function on window resize
        const resizeListener = () => {
            updateDimensions();
        };

        window.addEventListener('resize', resizeListener);

        // Cleanup listeners on unmount
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);  // Empty array ensures effect runs once when component mounts

    return { height, top, elementRef };
}


// export function useElementPosition<T extends HTMLElement>() {
//     const [height, setHeight] = useState(0);
//     const [top, setTop] = useState(0);
//     const elementRef = useRef<T | null>(null);  // Ref to the element you want to track

//     // Function to update height and top position
//     const updateDimensions = () => {
//         if (elementRef.current) {
//             const rect = elementRef.current.getBoundingClientRect();
//             setHeight(rect.height);  // Update height
//             setTop(rect.top);        // Update top position
//         }
//     };

//     useEffect(() => {
//         // Initially update dimensions
//         updateDimensions();

//         // Re-run the function on window resize or scroll
//         window.addEventListener('resize', updateDimensions);
//         // window.addEventListener('scroll', updateDimensions);

//         // Cleanup listeners on unmount
//         return () => {
//             window.removeEventListener('resize', updateDimensions);
//             // window.removeEventListener('scroll', updateDimensions);
//         };
//     }, []);  // Empty array to ensure the effect runs only once when the component mounts

//     return { height, top, elementRef };
// }



// // useElementPosition

// export function useElementPosition<T extends HTMLElement>() {
//     const [height, setHeight] = useState(0);
//     const [top, setTop] = useState(0);
//     const elementRef = useRef<T | null>(null);

//     useEffect(() => {
//         // Function to update position and height
//         const updateHeightAndPosition = () => {
//             if (elementRef.current) {
//                 const rect = elementRef.current.getBoundingClientRect();
//                 setHeight(rect.height); // Update height
//                 setTop(rect.top); // Track the top position of the element
//             }
//         };

//         // Listen to scroll and resize events to recalculate positions
//         // window.addEventListener('scroll', updateHeightAndPosition);
//         window.addEventListener('resize', updateHeightAndPosition);

//         // Initial calculation
//         updateHeightAndPosition();

//         // Clean up event listeners on unmount
//         return () => {
//             // window.removeEventListener('scroll', updateHeightAndPosition);
//             window.removeEventListener('resize', updateHeightAndPosition);
//         };
//     }, [setHeight, elementRef]);

//     return { height, top, elementRef };
// }
