interface HoverLineProps {
    href: string;
    value: string;
}

const HoverLine = (props: HoverLineProps) => {
    return (
        <div className="w-22 flex cursor-pointer flex-col justify-center overflow-hidden text-base opacity-80 hover:mt-2 hover:pb-1 hover:opacity-100">
            <a className="">
                <a
                    className="text-center font-semibold text-zinc-900 opacity-80 transition-all hover:border-b-4 hover:border-b-purple-800 hover:opacity-100"
                    href={props.href}
                >
                    {props.value}
                </a>
            </a>
        </div>
    );
};

export default HoverLine;
