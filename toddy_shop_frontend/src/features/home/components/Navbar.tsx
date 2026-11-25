"use client";

import { useState, useEffect } from "react";
import { Menu, Search, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Explore Map", href: "/explore" },
    { name: "Districts", href: "/#districts" },
    { name: "Community", href: "/community" },
    { name: "Admin", href: "/admin" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-30 w-full transition-all duration-300 ${
                    isScrolled
                        ? "bg-black/40 backdrop-blur-md border-b border-white/10"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <nav className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-4 text-white sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition hover:bg-black/35 sm:text-sm cursor-pointer"
                        aria-label="Open menu"
                    >
                        <Menu size={16} />
                        <span>Menu</span>
                    </button>

                    <Link
                        href="/"
                        aria-label="Shaap Home"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <Image
                            src="/logo.png"
                            alt="Toddy finder logo"
                            width={32}
                            height={32}
                            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/explore"
                            className="rounded-full border border-white/30 bg-black/20 p-2 backdrop-blur-sm transition hover:bg-black/35"
                            aria-label="Search toddy shops"
                        >
                            <Search size={15} />
                        </Link>
                        <Link
                            href="/admin"
                            className="rounded-full border border-white/30 bg-black/20 p-2 backdrop-blur-sm transition hover:bg-black/35"
                            aria-label="Admin panel"
                        >
                            <User size={15} />
                        </Link>
                    </div>
                </nav>
            </header>

            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ${
                    mobileMenuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
                aria-hidden={!mobileMenuOpen}
            >
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute inset-0 bg-black/65 backdrop-blur-[1px]"
                />
                <aside
                    className={`absolute left-0 top-0 h-full w-[280px] border-r border-white/10 bg-[#05170f] p-5 text-white transition-transform duration-300 ${
                        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="mb-8 flex items-center justify-between">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Image
                                src="/logo.png"
                                alt="Toddy finder logo"
                                width={26}
                                height={26}
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-full border border-white/20 p-2 cursor-pointer"
                            aria-label="Close menu"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="space-y-2 text-sm font-semibold">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-3 py-2 hover:bg-white/10"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </>
    );
}
