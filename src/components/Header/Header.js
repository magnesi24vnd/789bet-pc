function Header() {
    return (
        <div className="w-[62%] flex justify-between my-[0] mx-[auto] h-[11vh]">
            <div className="flex w-[40%]">
                <a className="flex" href="/">
                    <img
                        className="h-full py-[4px]"
                        src="./images/header_logo.png"
                        alt="logo"
                    />
                </a>
                <a className="flex items-end" href="/">
                    <img
                        className="h-[90%] ml-[10px]"
                        src="./images/header_slogan.png"
                        alt="logo"
                    />
                </a>
            </div>
            <div className="flex-1">
                <div className="h-[50%] flex p-[15px] pr-[0]  justify-end">
                    <a className="mr-[30px]" href="/">
                        <img
                            className="h-[45px]"
                            src="./images/login.png"
                            alt="Đăng nhập"
                        />
                    </a>
                    <a className="mr-[30px]" href="/">
                        <img
                            className="h-[53px]"
                            src="./images/register.png"
                            alt="Đăng ký"
                        />
                    </a>
                    <div>
                        <img
                            className="h-[45px] w-[65px]"
                            src="./images/language.png"
                            alt="Ngôn ngữ"
                        />
                    </div>
                </div>
                <div className="flex justify-end h-[50%] items-center">
                    <ul className="flex">
                        <li>
                            <a
                                className=" hover:text-[#FC8F00] transition capitalize text-[1.1rem] text-[#FFF] border-r-[1px] pr-[10px]"
                                href="/#"
                            >
                                Nạp tiền
                            </a>
                        </li>
                        <li>
                            <a
                                className=" hover:text-[#FC8F00] transition capitalize text-[1.1rem] text-[#FFF] border-r-[1px] pr-[10px] pl-[10px]"
                                href="/#"
                            >
                                Rút tiền
                            </a>
                        </li>
                        <li>
                            <a
                                className=" hover:text-[#FC8F00] transition capitalize text-[1.1rem] text-[#FFF] border-r-[1px] pr-[10px] pl-[10px]"
                                href="/#"
                            >
                                Lịch sử đặt cược
                            </a>
                        </li>
                        <li>
                            <a
                                className=" hover:text-[#FC8F00] transition capitalize text-[1.1rem] text-[#FFF] pr-[10px] pl-[10px]"
                                href="/#"
                            >
                                Giao diện điện thoại
                            </a>
                        </li>
                    </ul>
                    <div className="bg-[#2b2b2b] px-[15px] py-[5px] rounded-[18px]">
                        <span className="text-[#fff] text-[0.8rem]">
                            2023/04/024 (T5) 03:40:30
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
