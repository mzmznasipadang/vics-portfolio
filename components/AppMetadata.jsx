const author = "Victor Chandra | Vasile Novatchii";
const description =
	"UI/UX Designer from South Tangerang, Indonesia, who loves to develop websites and mobile apps.";
const url = "https://vics-portfolio.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://vics-portfolio.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Victor Chandra",
		"Victor Chandra - UI/UX Designer",
		"Frontend developer",
		"UI/UX Designer",
		"Portfolio website",
		"Frontend Developer Portfolio",
		"NasPad Studio",
		"MzMzNasiPadang"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "public/Vic's Portfolio.png",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "public/Vic's Portfolio.png",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
