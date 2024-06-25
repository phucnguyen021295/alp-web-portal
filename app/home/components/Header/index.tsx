'use client'
import { Flex } from "antd";
import Image from "next/image";

// Components
import Account from "@/app/home/components/Account";

// Styles
import "./index.local.scss";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
    const router = useRouter();

    const onClickLogo = () => {
        router.refresh()
    }

    return (
        <Flex className="alp-header" align="center" justify="space-between">
            <Image
                src={require("@/public/logo.svg")}
                alt="Vercel Logo"
                width={112}
                height={48}
                priority
                style={{cursor: 'pointer', boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)'}}
                onClick={onClickLogo}
            />
            <Account />
        </Flex>
    );
};

export default Header;
