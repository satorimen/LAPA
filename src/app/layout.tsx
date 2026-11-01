import {assetPath} from '@/lib/paths';
import type { Metadata, Viewport } from 'next';
import '@fontsource/rubik/hebrew-400.css';
import '@fontsource/rubik/hebrew-500.css';
import '@fontsource/rubik/hebrew-600.css';
import '@fontsource/rubik/hebrew-700.css';
import '@fontsource/rubik/cyrillic-400.css';
import '@fontsource/rubik/cyrillic-500.css';
import '@fontsource/rubik/cyrillic-600.css';
import '@fontsource/rubik/cyrillic-700.css';
import '@fontsource/rubik/latin-400.css';
import '@fontsource/rubik/latin-500.css';
import '@fontsource/rubik/latin-600.css';
import '@fontsource/rubik/latin-700.css';
import './globals.css';
export const metadata:Metadata={title:'LAPA',description:'מתארים את הבעיה. מכאן כבר נסתדר.',manifest:assetPath('manifest.webmanifest'),appleWebApp:{capable:true,statusBarStyle:'default',title:'LAPA'},icons:{icon:assetPath('icons/icon-192.png'),apple:assetPath('icons/apple-touch-icon.png')}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#171e19'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body>{children}</body></html>}
