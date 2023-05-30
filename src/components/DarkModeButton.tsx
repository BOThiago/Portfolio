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
            <div className="relative h-8 w-12 rounded-full bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 shadow-md shadow-gray-700 sm:w-16">
                <div
                    onClick={changeTheme}
                    className={
                        theme
                            ? "h-8 w-8 cursor-pointer rounded-full bg-gray-200 shadow-sm shadow-black duration-300 ease-in-out"
                            : "h-8 w-8 translate-x-[24px] cursor-pointer rounded-full bg-gray-200 shadow-sm shadow-black duration-300 ease-in-out sm:translate-x-[32px]"
                    }
                >
                    {" "}
                    <span className="material-symbols-outlined absolute select-none rounded-full p-1 shadow-md">
                        dark_mode
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DarkModeButton;
