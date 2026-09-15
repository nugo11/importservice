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

function upsertCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function upsertJsonLd(id: string, data?: object) {
  const existing = document.head.querySelector(`script#${id}`);
  if (!data) {
    if (existing) existing.remove();
    return;
  }

  let el = existing as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export type MetaOptions = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  canonicalPath?: string;
  schema?: object;
};

const SITE_URL = 'https://importservisi.ge';
const DEFAULT_TITLE = 'Importservisi • სენდვიჩ პანელების იმპორტი თურქეთიდან';
const DEFAULT_DESC = 'ჩვენ გთავაზობთ უმაღლესი ხარისხის თურქულ სენდვიჩ პანელებს პირდაპირ მწარმოებლისგან. პანელები უკვე ჩამოტანილია და ხელმისაწვდომია ჩვენს ბაზებზე თბილისსა და ქუთაისში.';
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export default function usePageMeta(opts: MetaOptions) {
  useEffect(() => {
    const title = opts.title ? `${opts.title} • Importservisi` : DEFAULT_TITLE;
    const description = opts.description || DEFAULT_DESC;
    const image = opts.image ? (opts.image.startsWith('http') ? opts.image : `${SITE_URL}${opts.image}`) : DEFAULT_IMAGE;
    const currentPath = opts.canonicalPath || window.location.pathname;
    const canonicalUrl = `${SITE_URL}${currentPath === '/' ? '/' : currentPath.replace(/\/$/, '')}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', opts.keywords);

    upsertCanonical(canonicalUrl);

    // Open Graph
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', image);

    // Twitter Card
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    // Dynamic Schema Injection
    if (opts.schema) {
      upsertJsonLd('page-specific-schema', opts.schema);
    } else {
      upsertJsonLd('page-specific-schema');
    }

    return () => {
      // Clean up page-specific schema on unmount
      const existing = document.head.querySelector('script#page-specific-schema');
      if (existing) existing.remove();
    };
  }, [opts.title, opts.description, opts.image, opts.keywords, opts.canonicalPath, opts.schema]);
}
