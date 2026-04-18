import React from 'react'
import { useState, useEffect } from 'react'

const texts = [
    // "Hi there,",
    "Frontend Developer",
    "UI Designer",
    "Problem Solver"
];

const Typing = () => {

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [charDisplay, setChar] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 100;
    const eraseSpeed = 20;
    const delayAfterTyping = 850; 
    const delayAfterErasing = 300;



    useEffect(() => {
        let timeout;

        if (!isDeleting) {
            // Typing
            if (charIndex < texts[textIndex].length) {
                timeout = setTimeout(() => {
                    setChar(prev => prev + texts[textIndex][charIndex]);
                    setCharIndex(prev => prev + 1);
                }, typingSpeed);
            } else {
                //  Pause after typing
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, delayAfterTyping);
            }
        } else {
            //  Erasing
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setChar(prev => prev.slice(0, -1));
                    setCharIndex(prev => prev - 1);
                }, eraseSpeed);
            } else {
                //  Pause after erasing
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setTextIndex(prev => (prev + 1) % texts.length);
                }, delayAfterErasing);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);



    return (
        <span className="underline">
            {charDisplay}
            <span className="animate-pulse">|</span>
        </span>
    );

};

export default Typing;