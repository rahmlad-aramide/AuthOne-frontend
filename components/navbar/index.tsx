'use client'
import Link from "next/link"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/svg";

interface NavLink {
	label: string;
	path?: string;
	type: 'dropdown' | 'text'| 'button';
    buttonType?: 'primary' | 'outlined';
	subLinks?: {
		path: string;
		icon?: JSX.Element;
		title: string;
		subtitle: string;
	}[];
}

const navLinks: NavLink[] = [
	{
		label: "Developers",
		type: "dropdown",
		subLinks: [
			{
				title: "Link 1",
				subtitle: "Link 1 subtitle",
				path: "/",
			},
		],
	},
	{
		label: "Community",
		type: "dropdown",
		subLinks: [
			{
				title: "Link 1",
				subtitle: "Link 1 subtitle",
				path: "/",
			},
		],
	},
	{
		label: "Product",
		type: "dropdown",
		subLinks: [
			{
				title: "Link 1",
				subtitle: "Link 1 subtitle",
				path: "/",
			},
		],
	},
	{
		label: "Our Projects",
		type: "dropdown",
		subLinks: [
			{
				title: "Link 1",
				subtitle: "Link 1 subtitle",
				path: "/",
			},
		],
	},
	{
		label: "Pricing",
		path: "/pricing",
		type: "text",
	},
	{
		label: "Contact Sales",
		path: "/contact-sales",
		type: "button",
		buttonType: "outlined",
	},
	{
		label: "Join Our Waitlist",
		path: "/join-waitlist",
		type: "button",
		buttonType: "primary",
	},
];
export const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <>
            <header className="h-20 md:h-[104px] w-full bg-[#292D32] flex flex-col items-center justify-center">
                <nav className="w-[calc(100%_-_64px)] md:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex justify-between items-center">
                    <Link href="/" className="mb-2"><Logo className="h-6 md:h-full" /></Link>
                    <ul className="hidden lg:flex gap-5 items-center">
                                {navLinks.map((navLink, idx) =>
                                    navLink.type === "dropdown" ? (
                                        <NavigationMenu key={`${navLink} ${idx}`}>
                                            <NavigationMenuList>
                                                <NavigationMenuItem>
                                                    <NavigationMenuTrigger
                                                        className={`${
                                                            pathname === navLink.path ||
                                                            pathname ===
                                                              (navLink.subLinks && navLink?.subLinks[idx]?.path)
                                                                ? "text-white"
                                                                : "hover:text-white"
                                                        } text-white hover:text-white/80 font-semibold font-poppins flex items-center text-[15px] p-0`}
                                                    >
                                                        {navLink.label}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent className="min-w-[480px] p-2">
                                                        {navLink.subLinks &&
                                                            navLink.subLinks.map((subLink, idx) => (
                                                                <NavigationMenuLink
                                                                    key={idx}
                                                                    className="transition duration-200 group"
                                                                >
                                                                    <Link
                                                                        href={subLink.path}
                                                                        className="flex space-x-3 w-full group-hover:bg-primary-50 rounded p-2 transition duration-200"
                                                                    >
                                                                        <div className="group-hover:bg-primary-100 min-w-11 w-11 h-11 flex justify-center items-center bg-white shadow-custom rounded border border-primary-50 backdrop-blur-[35.5px]">
                                                                            {subLink.icon}
                                                                        </div>
                                                                        <div>
                                                                            <div className="text-base mb-1">
                                                                                {subLink.title}
                                                                            </div>
                                                                            <div className="text-sm text-grey-300">
                                                                                {subLink.subtitle}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                            </NavigationMenuList>
                                        </NavigationMenu>
                                    ) : navLink.type === "button" ? (
                                        <Button variant={navLink.buttonType} className="font-semibold" onClick={()=>{
                                            alert("hello");
                                            router.push(`${navLink.path}`); 
                                        }}>
                                            {navLink.label}
                                        </Button>
                                    ) : (
                                        <Link
                                            key={idx}
                                            href={navLink.path ? navLink.path : "/"}
                                            className={`${
                                                pathname === navLink.path
                                                    ? "text-white hover:text-white/80"
                                                    : ""
                                            } flex items-center text-white hover:text-white/80 font-semibold`}
                                        >
                                            {navLink.label}
                                        </Link>
                                    )
                                )}
                            </ul>
                </nav>
            </header>
            <div className="w-full h-px bg-gradient-to-r from-[#DE4EAC] to-[#5C4EDE]" aria-hidden="true"></div>
        </>
    )
}