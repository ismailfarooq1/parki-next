import { Box } from "@mantine/core";
import Head from "next/head";
import GuestFooter from "../GuestFooter";
import GuestHeader from "../GuestHeader";

export default function GuestLayout({ children }) {
    return (
        <Box style={{ overflowX: 'hidden' }}>
            <Head>
                <title>Parki</title>
                <meta
                    name="Parki website"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/parki-logo.png" />
            </Head>
            <GuestHeader />
            {children}
            <GuestFooter />
        </Box>
    );
}
