"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
    {
        id: 1,
        title: "Master In-Demand Tech Skills With Hands-On Projects",
    },
    {
        id: 2,
        title: "Learn From Industry Experts And Build Your Portfolio",
    },
    {
        id: 3,
        title: "Advance Your Career With Cutting-Edge diary",
    }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        y: 0, // Ensures it doesn't shift vertically
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        y: 0, // Keeps alignment consistent
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        y: 0, // Prevents vertical movement on exit
    })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function QuotesSlider() {
    const [[page, direction], setPage] = useState([0, 0]);
    const testimonialIndex = Math.abs(page % quotes.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(interval);
    }, [page]);

    return (
        <section className="overflow-hidden relative w-full h-20 flex flex-col items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute top-0 left-0 w-full flex justify-center"
                    >
                        <h2 className="text-xl max-w-md mx-auto leading-[1.2] font-medium text-center">
                            {quotes[testimonialIndex].title}
                        </h2>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2">
                {quotes.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            const newDirection = index > testimonialIndex ? 1 : -1;
                            setPage([index, newDirection]);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === testimonialIndex ? 'w-6 bg-appPurple-900' : 'bg-gray-200/90'}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </section>
    );
}














// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const quotes = [
//     {
//         id: 1,
//         title: "Master In-Demand Tech Skills With Hands-On Projects",
//     },
//     {
//         id: 2,
//         title: "Learn From Industry Experts And Build Your Portfolio",
//     },
//     {
//         id: 3,
//         title: "Advance Your Career With Cutting-Edge diary",
//     }
// ];


// const variants = {
//     enter: (direction: number) => ({
//         x: direction > 0 ? 1000 : -1000,
//         opacity: 0
//     }),
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1
//     },
//     exit: (direction: number) => ({
//         zIndex: 0,
//         x: direction < 0 ? 1000 : -1000,
//         opacity: 0
//     })
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
//     return Math.abs(offset) * velocity;
// };

// export default function QuotesSlider() {
//     const [[page, direction], setPage] = useState([0, 0]);
//     const testimonialIndex = Math.abs(page % quotes.length);

//     const paginate = (newDirection: number) => {
//         setPage([page + newDirection, newDirection]);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             paginate(1);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [page]);

//     return (
//         <section className="overflow-hidden relative">

//             <AnimatePresence initial={false} custom={direction}>
//                 <motion.div
//                     key={page}
//                     custom={direction}
//                     variants={variants}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                     transition={{
//                         x: { type: "spring", stiffness: 300, damping: 30 },
//                         opacity: { duration: 0.2 }
//                     }}
//                     drag="x"
//                     dragConstraints={{ left: 0, right: 0 }}
//                     dragElastic={1}
//                     onDragEnd={(e, { offset, velocity }) => {
//                         const swipe = swipePower(offset.x, velocity.x);

//                         if (swipe < -swipeConfidenceThreshold) {
//                             paginate(1);
//                         } else if (swipe > swipeConfidenceThreshold) {
//                             paginate(-1);
//                         }
//                     }}
//                     className="w-full"
//                 >
//                     <h2 className="text-xl max-w-md mx-auto leading-[1.2] font-medium mb-6">
//                          {quotes[testimonialIndex].title}
//                     </h2>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="flex justify-center gap-2">
//                 {quotes.map((_, index) => (
//                     <motion.button
//                         key={index}
//                         onClick={() => {
//                             const newDirection = index > testimonialIndex ? 1 : -1;
//                             setPage([index, newDirection]);
//                         }}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${index === testimonialIndex ? 'w-6 bg-appPurple-900' : 'bg-gray-200/90'
//                             }`}
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };