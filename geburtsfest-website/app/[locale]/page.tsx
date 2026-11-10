import Link from 'next/link';
import { notFound } from 'next/navigation';
const content = {
 en: { intro:'A celebration of birth, connection and community', memories:'Relive GeburtsFest 2026', sub:'A look back at our first gathering', video:'Watch our recap', gallery:'Moments from the festival', upcoming:'More memories are coming soon', closing:'Stay connected', message:'We look forward to sharing what comes next.', language:'Deutsch' },
 de: { intro:'Ein Fest für Geburt, Verbundenheit und Gemeinschaft', memories:'GeburtsFest 2026 noch einmal erleben', sub:'Ein Rückblick auf unser erstes Fest', video:'Unser Rückblick', gallery:'Eindrücke vom GeburtsFest', upcoming:'Weitere Erinnerungen folgen bald', closing:'Bleib verbunden', message:'Wir freuen uns, bald mehr mit euch zu teilen.', language:'English' }
} as const;
export function generateStaticParams() { return [{locale:'en'}, {locale:'de'}]; }
export default async function Page({params}:{params:Promise<{locale:string}>}) {
 const {locale}=await params;
 if(locale!=='en'&&locale!=='de') notFound();
 const t=content[locale];
 return <main><header className="top"><Link className="brand" href={`/${locale}`}>GeburtsFest</Link><Link className="language" href={locale==='en'?'/de':'/en'}>{t.language}</Link></header>
 <section className="hero"><div className="ornament">✺</div><h1>GeburtsFest</h1><p>{t.intro}</p><span className="year">2026</span></section>
 <section className="section"><p className="eyebrow">GeburtsFest 2026</p><h2>{t.memories}</h2><p className="subtitle">{t.sub}</p><div className="video"><iframe src="https://www.youtube-nocookie.com/embed/xu9F17W83Tc" title="GeburtsFest 2026 recap" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><p className="video-caption">{t.video}</p><div className="video-grid"><div className="placeholder">Video 02<br/><small>{t.upcoming}</small></div><div className="placeholder">Video 03<br/><small>{t.upcoming}</small></div></div></section>
 <section className="section gallery"><h2>{t.gallery}</h2><div className="photo-grid">{Array.from({length:6},(_,i)=><div className="photo" key={i}><span>Photo {String(i+1).padStart(2,'0')}</span></div>)}</div></section>
 <section className="closing"><h2>{t.closing}</h2><p>{t.message}</p></section><footer>© GeburtsFest</footer></main>;
}
