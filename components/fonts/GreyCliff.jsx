import { Global } from '@mantine/core';
import localFont from '@next/font/local'

const bold = localFont({ src: '../../public/fonts/grey-cliff/GreycliffCF-Bold.woff2' })
const regular = localFont({ src: '../../public/fonts/grey-cliff/GreycliffCF-Regular.woff2' })
const light = localFont({ src: '../../public/fonts/grey-cliff/GreycliffCF-Light.woff2' })

export default function GreyCliff() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'bold',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${light}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'light',
          }
        },
      ]}
    />
  );
}