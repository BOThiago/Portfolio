interface HoverLineProps {
    href: string;
    value: string;
}

const HoverLine = (props: HoverLineProps) => {
    return (
        <div className="w-22 flex h-full flex-col justify-center overflow-hidden text-base opacity-80">
            <a className="h-max cursor-pointer transition-all hover:border-b-4 hover:border-b-purple-800">
                <a
                    className="flex h-full text-center font-semibold text-zinc-900 opacity-80  hover:mt-2  hover:pb-1 hover:opacity-100 hover:ease-in"
                    href={props.href}
                >
                    {props.value}
                </a>
            </a>
        </div>
    );
};

export default HoverLine;
