type NavbarItemProps = {
    children: string;
    href?: string|undefined;
};

const NavbarItem = ({children, href}: NavbarItemProps) => {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    );
};

const Navbar = () => {
    return (
        <nav className="max-w-5xl mx-auto rounded-xl bg-gray-800">
            <div className="flex items-center justify-between p-4">
                <p>Ary</p>
                <ul className="flex space-x-4">
                    <NavbarItem href={"/"}>Home</NavbarItem>
                    <NavbarItem href={"/about"}>About</NavbarItem>
                    <NavbarItem href={"/contact"}>Contact</NavbarItem>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
