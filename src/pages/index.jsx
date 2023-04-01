import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import SignIn from "@/components/SignIn";

import Layout from "@/layout/Layout";

import Homepage from "@/components/Homepage";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <Homepage />

            {/* <p>{t("test")}</p>

            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>

            </div>   */}
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
