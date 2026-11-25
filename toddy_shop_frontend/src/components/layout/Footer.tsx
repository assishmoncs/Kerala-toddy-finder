import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Explore", href: "/explore" },
        { name: "Districts", href: "/#districts" },
        { name: "Community", href: "/community" },
    ];

    return (
        <footer className="bg-[#006A4E] text-white w-full px-5 md:px-10 py-5 md:min-h-[200px] flex items-center justify-center ">
            <div className="max-w-[1440px] w-full mx-auto ">
                {/* Top section */}
                <div className="flex flex-col md:flex-row items-center  justify-between gap-5 md:gap-8">
                    {/* Logo */}
                    <Link href="/" className="w-[50px] h-[70px] shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Kerala Coder Cafe Logo"
                            width={50}
                            height={70}
                            className="w-full h-full object-contain"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-7 md:gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-[family-name:var(--font-body)] font-normal text-[20px] md:text-[14px] lg:text-[16px] xl:text-[20px] leading-[100%] tracking-[0%] text-[#F5F5F5] hover:opacity-80 transition-opacity"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom section */}
                <div className="mt-5 md:mt-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-4 text-center md:text-left">
                    <p className="font-[family-name:var(--font-body)] font-normal text-[18px] md:text-[14px] lg:text-[16px] xl:text-[20px] leading-[130%] tracking-[0%] text-[#F5F5F5]">
                        © 2026, Kerala Coder Cafe
                    </p>

                    <p className="max-w-[430px] md:max-w-[800px] font-[family-name:var(--font-body)] font-normal text-[18px] md:text-[14px] lg:text-[16px] xl:text-[20px] leading-[130%] tracking-[0%] text-[#F5F5F5] md:text-right">
                        Consumption of alcohol is injurious to health and “Be
                        safe: Don’t drink and drive”
                    </p>
                </div>
            </div>
        </footer>
    );
}
