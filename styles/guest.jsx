import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    inner: {
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.lg,
        fontWeight: 500,

        "&:hover": {
            backgroundColor: '#F17E2B',
            color: 'white'
        },
    },

    linkLabel: {
        marginRight: 5,
    },

    marginTop: {
        marginTop: 130,
    },

    header: {
        backgroundColor: "transparent",
        borderBottom: 0,
        position: "fixed",
    },

    homepageCategories: {
        minHeight: 780,
    },
    homepageImageFeatureMain: {
        height: 780,
        overflow: "hidden",
        // "&:hover": {
        //     border: 'solid'
        // }
    },
    homepageImageSecond: {
        height: 390,
        overflow: "hidden",
        // "&:hover": {
        //     border: 'solid'
        // }
    },
    homepageImageTitle: {
        position: "absolute",
        zIndex: 1,
        marginTop: 30,
        marginLeft: 30,
        background: "#F17E2BB8",
        borderRadius: 10,
        padding: 10,
        color: 'white',
        textTransform: 'uppercase'
    },
}));

export default useStyles;
