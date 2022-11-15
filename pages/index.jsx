import { Carousel } from "@mantine/carousel";
import useStyles from "../styles/guest";
import {
    Box,
    Grid,
    Image,
    MediaQuery,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import slide1 from "../public/images/slider-1.png";
import slide2 from "../public/images/slider-2.jpg";
import slide3 from "../public/images/slider-3.jpg";
import parket from "../public/images/categories/parket-1.jpeg";
import parket2 from "../public/images/categories/parket-2.jpeg";
import hardParket from "../public/images/categories/hard-parket-1.jpg";
import vinylParket from "../public/images/categories/vinyl-parket-1.jpeg";
import teppi1 from "../public/images/categories/teppi-1.jpg";
import cat4 from "../public/images/categories/cat-4.jpg";
import cat5 from "../public/images/categories/cat-5.jpg";
import cat6 from "../public/images/categories/cat-6.jpg";
import cat7 from "../public/images/categories/cat-7.jpg";
import cat8 from "../public/images/categories/cat-8.jpg";
import cat9 from "../public/images/categories/cat-9.jpeg";
import cat10 from "../public/images/categories/cat-10.jpg";
import cat11 from "../public/images/categories/cat-11.jpg";
import cat12 from "../public/images/categories/cat-12.jpg";

import Card from "../components/Card";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fall-animation/fall-animation.scss";
import Link from "next/link";

// import withCaption from 'react-awesome-slider/dist/captioned';

const data = [
    {
        image: parket.src,
        title: "Parador",
        category: "Parket",
    },
    {
        image: parket2.src,
        title: "Heat Herringbone Rustik ómeðhöndlað útlit",
        category: "Parket",
    },
    {
        image: vinylParket.src,
        title: "Carbon Oak",
        category: "Harðparket",
    },
    {
        image: teppi1.src,
        title: "E-Check 98",
        category: "Teppi",
    },
];

export default function Home() {
    const { classes } = useStyles();

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Box>
            <MediaQuery smallerThan="sm" styles={{ height: 0 }}>
                <AwesomeSlider
                    bullets={false}
                    cssModule={[CoreStyles, AnimationStyles]}
                    animation="fallAnimation"
                    mobileTouch={true}
                    className={classes.awesomeSlider}
                >
                    <div>
                        <Image
                            width={"auto"}
                            className={classes.homepageCoverImage}
                            src={slide1.src}
                        />
                    </div>
                    <div>
                        <Image width={"auto"} src={slide2.src} />
                    </div>
                    <div>
                        <Image src={slide3.src} />
                    </div>
                </AwesomeSlider>
            </MediaQuery>
            <MediaQuery
                smallerThan="sm"
                styles={{
                    height: 500,
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: 'column'
                }}
            >
                <Box sx={{ display: 'none' }}>
                    <Title order={1}> PARKI </Title>
                    <Title order={6}> Interiors </Title>
                </Box>
            </MediaQuery>

            <Grid className={classes.homepageCategories}>
                <Grid.Col md={8} sm={12} sx={{ padding: 0 }}>
                    <Link
                        className={classes.homepageImageFeatureMain}
                        href={"/"}
                    >
                        <Title order={3} className={classes.homepageImageTitle}>
                            Parket
                        </Title>
                        <Image
                            width="100%"
                            height={780}
                            fit="cover"
                            src={parket.src}
                        />
                    </Link>
                </Grid.Col>
                <Grid.Col md={4} sm={12}>
                    <Grid>
                        <Grid.Col md={12} sm={12} sx={{ padding: 0 }}>
                            <Link
                                className={classes.homepageImageSecond}
                                href={"/"}
                            >
                                <Title
                                    order={3}
                                    className={classes.homepageImageTitle}
                                >
                                    Harðparket
                                </Title>
                                <Image
                                    width="100%"
                                    height={390}
                                    fit="cover"
                                    src={hardParket.src}
                                />
                            </Link>
                        </Grid.Col>
                        <Grid.Col md={12} sm={12} sx={{ padding: 0 }}>
                            <Link
                                className={classes.homepageImageSecond}
                                href={"/"}
                            >
                                <Title
                                    order={3}
                                    className={classes.homepageImageTitle}
                                >
                                    Vínylefni
                                </Title>
                                <Image
                                    width="100%"
                                    height={390}
                                    fit="cover"
                                    src={vinylParket.src}
                                />
                            </Link>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>

            <Grid sx={{ marginBottom: 40 }}>
                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Flísar
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat4.src}
                        />
                    </Link>
                </Grid.Col>
                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Teppi
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat5.src}
                        />
                    </Link>
                </Grid.Col>
                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Stigahúsateppi
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat6.src}
                        />
                    </Link>
                </Grid.Col>

                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Kerfisloft
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat7.src}
                        />
                    </Link>
                </Grid.Col>
                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Dúkaloft
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat8.src}
                        />
                    </Link>
                </Grid.Col>
                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Hurðir
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat9.src}
                        />
                    </Link>
                </Grid.Col>

                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Innréttingar
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat10.src}
                        />
                    </Link>
                </Grid.Col>
                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Persía mottur
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat11.src}
                        />
                    </Link>
                </Grid.Col>
                <Grid.Col md={4} sm={12} sx={{ padding: 0 }}>
                    <Link className={classes.homepageImageSecond} href={"/"}>
                        <Title order={3} className={classes.homepageImageTitle}>
                            Veggfóður
                        </Title>
                        <Image
                            width="100%"
                            height={390}
                            fit="cover"
                            src={cat12.src}
                        />
                    </Link>
                </Grid.Col>
            </Grid>

            <Title order={1} sx={{ textAlign: "center", marginBottom: 40 }}>
                Featured Products
            </Title>

            <Carousel
                slideSize="30%"
                breakpoints={[
                    { maxWidth: "sm", slideSize: "100%", slideGap: 1 },
                ]}
                slideGap="xl"
                align="start"
                slidesToScroll={mobile ? 1 : 2}
                loop={true}
            >
                {slides}
            </Carousel>
        </Box>
    );
}
