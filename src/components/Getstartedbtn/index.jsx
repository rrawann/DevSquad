import Link from "next/link";
import { useTranslation } from "next-i18next";
const Getstartedbtn = () => {
    const { t } = useTranslation("common");
    return (
        <div>
            <Link
                href='/signup'
                className='w-80 h-7 py-2.5 px-4 rounded-lg bg-primary-blue text-white text-xl font-medium'
            >
                {t("home.GetStarted")}
            </Link>
        </div>
    );
};

export default Getstartedbtn;
