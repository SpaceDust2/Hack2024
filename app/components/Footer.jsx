import Image from "next/image";
import last from "./last.png"

const Footer = ({}) => {
    return (
        <div className="flex bg-slate-800 w-screen h-auto flex-col items-center justify-center pt-2 pb-2">
            {/* Content container  */}
            <div className="flex flex-row justify-between w-screen pr-[300px] pl-[300px] pt-2">
                {/* text container  */}
                <div className="flex flex-row text-sm">
                    <div className=" flex flex-col text-white gap-5">
                        <span className=" text-slate-400">Контакты</span>
                        <span>8 (800) 555-35-35 </span>
                        <span>nezanimay@pozvoni.com</span>
                    </div>
                    <div className="flex flex-col text-white gap-5">
                        <span>О проекте</span>
                        <span>Вход для администраторов</span>
                    </div>
                </div>
                {/* sosial image  */}
                <div className="flex flex-row justify-centec items-center gap-2">
                    <Image
                        src="/vk.png"
                        width={25}
                        height={24}
                        alt="Picture of the vk"
                    />
                    <Image
                        src="/tg.png"
                        width={28}
                        height={28}
                        alt="Picture of the tg"
                    />
                    <Image
                        src="/ok.png"
                        width={28}
                        height={28}
                        alt="Picture of the ok"
                    />
                </div>
            </div>
            <div className="mt-10" >
                <Image src={last}  alt="Picture of last info"/>
            </div>
        </div>
    );
};

export default Footer;
