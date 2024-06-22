import { Flex } from "antd";
import Image from "next/image";

// Components
import Account from "@/app/home/components/Account";

// Styles
import "./index.local.scss";

const Header: React.FC = () => {
    return (
        <Flex className="alp-header" align="center" justify="space-between">
            <Image
                src={require("@/public/logo.svg")}
                alt="Vercel Logo"
                width={112}
                height={48}
                priority
            />
            <Account />
        </Flex>
    );
};

export default Header;
