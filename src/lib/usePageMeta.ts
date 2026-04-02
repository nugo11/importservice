import { useEffect } from 'react';

function upsertMeta(attr: 'name' | 'property', key: string, content?: string) {
  if (!content) {
    const existing = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (existing) existing.remove();
    return;
  }

  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

type MetaOptions = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
};

export default function usePageMeta(opts: MetaOptions) {
  useEffect(() => {
    if (opts.title) document.title = opts.title;
    upsertMeta('name', 'description', opts.description);
    upsertMeta('name', 'keywords', opts.keywords);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', opts.title);
    upsertMeta('property', 'og:description', opts.description);
    upsertMeta('property', 'og:image', opts.image);

    upsertMeta('name', 'twitter:card', opts.image ? 'summary_large_image' : 'summary');
    upsertMeta('name', 'twitter:title', opts.title);
    upsertMeta('name', 'twitter:description', opts.description);
    upsertMeta('name', 'twitter:image', opts.image);
  }, [opts.title, opts.description, opts.image, opts.keywords]);
}
