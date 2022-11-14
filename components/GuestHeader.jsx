import {
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconShoppingCart } from "@tabler/icons";
import useStyles from '../styles/guest';
import logo from '../public/images/parki-logo.png'
import { BackgroundImage } from '@mantine/core';
import Link from "next/link";

export default function GuestHeader({ links }) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Header className={classes.header} height={100} mb={10}>
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                    />
                    <Link href="/">
                        <Image 
                            radius="md"
                            src={logo.src}
                        />
                    </Link>
                </Group>
                <Group spacing={5} className={classes.links}>
                    <Menu>
                        <Link href="/about" className={classes.link}>Netverslun</Link>
                    </Menu>

                    <Menu
                        // key={link.label}
                        trigger="hover"
                        exitTransitionDuration={0}
                    >
                        <Menu.Target>
                            <a
                                href="#"
                                className={classes.link}
                                onClick={(event) => event.preventDefault()}
                            >
                                <Center>
                                    <span className={classes.linkLabel}>
                                        Vöruflokkar
                                    </span>
                                    <IconChevronDown size={12} stroke={1.5} />
                                </Center>
                            </a>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>Starfsfólk</a>
                        </Menu.Dropdown>
                    </Menu>

                    <Menu>
                        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>Verkefnin</a>
                    </Menu>

                    <Menu
                        // key={link.label}
                        trigger="hover"
                        exitTransitionDuration={0}
                    >
                        <Menu.Target>
                            <a
                                href="#"
                                className={classes.link}
                                onClick={(event) => event.preventDefault()}
                            >
                                <Center>
                                    <span className={classes.linkLabel}>
                                        Um okkur
                                    </span>
                                    <IconChevronDown size={12} stroke={1.5} />
                                </Center>
                            </a>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>Starfsfólk</a>
                            <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>Sjá bækling</a>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
                <Button radius="xl" sx={{ height: 30, backgroundColor: "#F17E2B" }}>
                    <IconShoppingCart
                        // color={"#F17E2B"}
                    />
                </Button>
            </Container>
        </Header>
    );
}
