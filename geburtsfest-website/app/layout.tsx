import type { Metadata } from 'next';
import './styles.css';
export const metadata: Metadata = { title: 'GeburtsFest', description: 'GeburtsFest — celebrating birth, connection and community.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html><body>{children}</body></html>; }
