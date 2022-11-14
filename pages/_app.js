import AdminLayout from '../components/layouts/AdminLayout';
import GuestLayout from '../components/layouts/GuestLayout';
import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps, router }) {
    if (router.pathname.startsWith('/admin/')) {
        return (
            <AdminLayout>
                <Component {...pageProps} />
            </AdminLayout>
        );
    } else {
        return (
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    fontFamily: 'Greycliff CF, sans-serif',
                    colorScheme: 'light',
                }}
            >
                <GuestLayout>
                    <Component {...pageProps} />
                </GuestLayout>
            </MantineProvider>
        );
    }
}

export default MyApp
