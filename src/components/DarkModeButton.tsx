const DarkModeButton = ({
    setTheme,
    theme,
}: {
    setTheme: (theme: boolean) => void;
    theme?: boolean;
}) => {
    const changeTheme = () => {
        setTheme(!theme);
    };

    return (
        <div className="">
            <div className="w-12 sm:w-16 h-8 bg-gradient-to-r from-zinc-500 via-zinc-700 to-zinc-900 rounded-full relative shadow-sm shadow-gray-700">
                <div
                    onClick={changeTheme}
                    className={
                        theme
                            ? "cursor-pointer w-8 h-8 bg-gray-200 rounded-full ease-in-out duration-300 shadow-sm shadow-black"
                            : "cursor-pointer w-8 h-8 bg-gray-200 rounded-full translate-x-[24px] sm:translate-x-[32px] ease-in-out duration-300 shadow-sm shadow-black"
                    }
                ></div>
            </div>
        </div>
    );
};

export default DarkModeButton;
