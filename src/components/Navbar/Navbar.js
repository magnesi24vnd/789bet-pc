function Navbar() {
    const listMenuItems = [
        {
            icon: './images/Vector.png',
            name: 'thể thao',
        },
        {
            icon: './images/Vector-0.png',
            name: 'casino',
        },
        {
            icon: './images/Vector-1.png',
            name: 'trò chơi',
        },
        {
            icon: './images/Vector-2.png',
            name: 'bắn cá',
        },
        {
            icon: './images/Vector-3.png',
            name: 'game bài',
        },
        {
            icon: './images/Vector-4.png',
            name: 'đá gà',
        },
        {
            icon: './images/Vector-5.png',
            name: 'xổ số',
        },
        {
            icon: './images/Vector-6.png',
            name: 'khuyến mãi',
        },
        {
            icon: './images/Vector-7.png',
            name: 'tải app',
        },
        {
            icon: './images/Vector-8.png',
            name: 'đại lý',
        },
    ];

    return (
        <div className="w-[62%] flex justify-between my-[0] mx-[auto] h-[5vh]">
            <ul className="flex justify-between w-full">
                {listMenuItems.map((item, index) => (
                    <li className="flex-1" key={index}>
                        <a
                            className="flex justify-center items-center h-full text-[1.15rem] font-[500] hover:bg-[#FF3B43] transition"
                            href="/#"
                        >
                            <img src={item.icon} alt="" />
                            <span className="uppercase text-[#fff] pl-[5px]">
                                {item.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
