import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../codeBlock';

interface ContentSectionProps {
    database: any;
}

const ContentSection: FC<ContentSectionProps> = ({ database }) => {
    const topRef = useRef<HTMLDivElement>(null);
    const offset = 20; // Adjust this value for desired top padding in pixels

    useEffect(() => {
        if (topRef.current) {
            const topPosition = topRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }

        console.log(database, "Content section");

    }, [database]);

    return (
        <div className="mt-3">
            {/* <div ref={topRef} className="max-w-4xl mx-auto px-4 pt-6"> */}

            {database?.map((section: any, index: any) => {
                switch (section.type) {
                    case 'title':
                        return (
                            <motion.h2
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                viewport={{ once: true }}
                                className="text-2xl font-medium tracking-[1.2] mb-4"
                            >
                                {section.text}
                            </motion.h2>
                        );

                    case 'paragraph':
                        return (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                viewport={{ once: true }}
                                className="mb-6 text-gray-600"
                            >
                                {section.text}
                            </motion.p>
                        );

                    case 'code':
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <CodeBlock code={section.code || ''} language={section.language || 'plaintext'} />
                            </motion.div>
                        );

                    case 'button':
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <a
                                    href={section.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-2 text-lg font-semibold text-appPurple-900 hover:underline"
                                >
                                    {section.label}
                                </a>
                            </motion.div>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ContentSection;
