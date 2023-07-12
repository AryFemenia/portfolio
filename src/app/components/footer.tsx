type FooterItemProps = {
    children: string;
    href?: string|undefined;
};

const FooterItem = ({children, href}: FooterItemProps) => {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    );
};

const Footer = () => {
    return (
        <footer>
          <p>Ary Femenia - 2023</p>
        </footer>
    );
};

export default Footer;
