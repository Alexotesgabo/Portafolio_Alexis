import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Alexis Hernandez - Analista de Datos',
	description:
		'Mi nombre es Alexis, soy un estudiante apasionado, que lucha por estar siempre un paso adelante, creo en que puedo lograr muchas cosas. Ahora mismo me desempeño como Analista de Datos en MADISA CAT buscando mejoras continuas a nuestros procesos de obtencion de datos.',
	keywords: [
		'Programador',
		'Analista de TI',
		'Administrador SQL',
		'Diseño web',
		'JavaScript',
		'React',
		'Next.js',
		'Tester ',
		'Resolvedor de problemas',
		'soluciones efectivas',
		'Desarrollo web',
		'Alexis Hernandez',
	],
	authors: [{ name: 'Alexis Hernandez' }],
	creator: 'Alexis Hernandez',
	openGraph: {
		title: 'Alexis Hernandez - Mi portafolio',
		description: 'Analista de datos especializado en SQL, con nociones de programacion y Diseño web, en busqueda de retos.',
		url: 'https://your-domain.com',
		siteName: 'Alexis Hernandez - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Alexis Hernandez - Mi portafolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Alexis Hernandez - Developer',
		description: 'Analista de datos especializado en SQL, con nociones de programacion y Diseño web, en busqueda de retos.',
		creator: '@Alexhdzvzz',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
