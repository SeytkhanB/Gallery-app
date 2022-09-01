
// WHEN I USE THIS CUSTOM HOOK IT GIVES ME AN ERROR
// THAT'S WHY I DON'T USE IT

import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }

    const element = ref.current;
    
    useEffect(() => {
        element.addEventListener("mouseenter", enter);
        element.addEventListener("mouseleave", leave);
        
        return () => {    
            element.removeEventListener("mouseenter", enter);
            element.removeEventListener("mouseleave", leave);
        };
    }, []);
    
    return [hovered, ref]
};

export default useHover