import { useState } from "react";

interface HoverLineProps {
    href: string;
    value: string;
}

const HoverLine = (props: HoverLineProps) => {
    const [hover, setHover] = useState(false);

    const hoverFunction = () => {
        setHover(!hover);
    };

    const leaveFunction = () => {
        setHover(!hover);
    };

    return (
        <a className="flex flex-col items-center justify-center w-22 overflow-hidden cursor-pointer">
            <a
                className="text-lg hover:font-semibold text-zinc-900"
                onMouseOver={hoverFunction}
                onMouseLeave={leaveFunction}
                href={props.href}
            >
                {props.value}
            </a>

            <span
                className={
                    hover
                        ? "h-[3px] w-[100%] bg-purple-900 ease-in-out duration-100"
                        : "h-[3px] w-[100%] bg-purple-900 ease-in-out duration-100 -translate-x-[101%] "
                }
            ></span>
        </a>
    );
};

export default HoverLine;
