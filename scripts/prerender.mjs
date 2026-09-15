import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/',
    title: 'Importservisi • სენდვიჩ პანელების იმპორტი თურქეთიდან | მარაგშია',
    description: 'უმაღლესი ხარისხის თურქული სენდვიჩ პანელები პირდაპირ მწარმოებლისგან. კედლისა და სახურავის პანელები (PIR, PUR, Rockwool). ბაზები თბილისსა და ქუთაისში. ტელ: +995 591 92 75 58.',
    image: '/images/og-image.jpg',
    h1: 'სენდვიჩ პანელების იმპორტი თურქეთიდან',
    content: `
      <section class="hero-prerender">
        <h1>სენდვიჩ პანელების იმპორტი თურქეთიდან</h1>
        <p>ჩვენ გთავაზობთ უმაღლესი ხარისხის თურქულ სენდვიჩ პანელებს პირდაპირ მწარმოებლისგან. პანელები უკვე ჩამოტანილია და ინახება ჩვენს ბაზებზე თბილისსა და ქუთაისში.</p>
        <p>დარეკეთ: <a href="tel:591927558">+995 591 92 75 58</a></p>
      </section>
      <section>
        <h2>სენდვიჩ პანელები მარაგშია</h2>
        <p>ხელმისაწვდომი სისქეები: 40მმ, 50მმ, 60მმ, 80მმ, 100მმ, 120მმ, 150მმ. შევსება: PIR, PUR, Rockwool (ქვაბამბა).</p>
      </section>
    `
  },
  {
    path: '/products',
    title: 'პროდუქცია • სენდვიჩ პანელები თურქეთიდან • Importservisi',
    description: 'თურქული სახურავისა და კედლის სენდვიჩ პანელების სრული ასორტიმენტი. საუკეთესო ფასები პირდაპირ იმპორტიორისგან.',
    image: '/images/roof-panels.jpg',
    h1: 'სენდვიჩ პანელების ასორტიმენტი',
    content: `
      <h1>სენდვიჩ პანელების ასორტიმენტი</h1>
      <p>შეარჩიეთ თქვენი პროექტისთვის შესაბამისი სენდვიჩ პანელი: სახურავის პანელები (5-ტალღოვანი), კედლის პანელები (დამალული და ღია საკეტით), სამაცივრე კარებები.</p>
      <ul>
        <li><a href="/products/roof">სახურავის სენდვიჩ პანელები (40მმ-150მმ)</a></li>
        <li><a href="/products/wall">კედლის სენდვიჩ პანელები (40მმ-150მმ)</a></li>
      </ul>
    `
  },
  {
    path: '/products/roof',
    title: 'სახურავის სენდვიჩ პანელები (5-ტალღოვანი) • Importservisi',
    description: 'უმაღლესი ხარისხის 5-ტალღოვანი სახურავის სენდვიჩ პანელები PIR და ქვაბამბის შევსებით. საიმედო თერმოიზოლაცია და წყალგაუმტარობა.',
    image: '/images/roof-panels.jpg',
    h1: 'სახურავის სენდვიჩ პანელები',
    content: `
      <h1>სახურავის სენდვიჩ პანელები</h1>
      <p>ჩვენი სახურავის სენდვიჩ პანელები წარმოადგენს თანამედროვე მშენებლობის სტანდარტს. ისინი შექმნილია იმისთვის, რომ გაუძლოს ექსტრემალურ ამინდს, უზრუნველყოს მაქსიმალური თერმოიზოლაცია და აბსოლუტური ჰერმეტულობა.</p>
      <p>ხელმისაწვდომი სისქეები: 40მმ, 50მმ, 80მმ, 100მმ, 150მმ. შევსება: PIR (ცეცხლმედეგი), PUR, Rockwool.</p>
    `
  },
  {
    path: '/products/wall',
    title: 'კედლის სენდვიჩ პანელები • Importservisi',
    description: 'თერმოიზოლირებული კედლის სენდვიჩ პანელები ფასადებისა და შიდა ტიხრებისთვის. დამალული და სტანდარტული საკეტით.',
    image: '/images/wall-panels.jpg',
    h1: 'კედლის სენდვიჩ პანელები',
    content: `
      <h1>კედლის სენდვიჩ პანელები</h1>
      <p>ჩვენი კედლის სენდვიჩ პანელები იდეალურია ფასადების, შიდა ტიხრებისა და სამრეწველო შენობების მოსაწყობად. ისინი გამოირჩევიან მაღალი თერმოიზოლაციით, ხანძარმედეგობითა და სწრაფი მონტაჟით.</p>
      <p>ხელმისაწვდომი სისქეები: 40მმ, 50მმ, 80მმ, 100მმ, 150მმ.</p>
    `
  },
  {
    path: '/services',
    title: 'მომსახურება და მშენებლობა • Importservisi',
    description: 'სენდვიჩ პანელებით მშენებლობა: საწყობები, სამაცივრე კამერები, კონტეინერები, კომერციული და ინდუსტრიული ობიექტები.',
    image: '/images/containers.jpg',
    h1: 'რისი აშენებაა შესაძლებელი სენდვიჩ პანელებით?',
    content: `
      <h1>რისი აშენებაა შესაძლებელი სენდვიჩ პანელებით?</h1>
      <p>სენდვიჩ პანელები იდეალურია ნებისმიერი ტიპის შენობისთვის: საოფისე და სასაწყობე კონტეინერები, ლოგისტიკური ცენტრები, სამაცივრე მეურნეობები, კომერციული პავილიონები და საწარმოო შენობები.</p>
    `
  },
  {
    path: '/services/containers',
    title: 'კონტეინერების მშენებლობა • Importservisi',
    description: 'სწრაფად ასაწყობი საოფისე, სასაწყობე და საცხოვრებელი მოდულური კონტეინერები სენდვიჩ პანელებით.',
    image: '/images/containers.jpg',
    h1: 'მოდულური კონტეინერები',
    content: `<h1>მოდულური კონტეინერები სენდვიჩ პანელებით</h1><p>საოფისე, სასაწყობე და საცხოვრებელი კონტეინერები სწრაფი მონტაჟით.</p>`
  },
  {
    path: '/services/warehouses',
    title: 'სასაწყობე მეურნეობების მშენებლობა • Importservisi',
    description: 'თანამედროვე ლოგისტიკური და სასაწყობე ჰაბების მშენებლობა თურქული სენდვიჩ პანელებით.',
    image: '/images/warehouses.jpg',
    h1: 'სასაწყობე მეურნეობები',
    content: `<h1>სასაწყობე მეურნეობები სენდვიჩ პანელებით</h1><p>სწრაფი მშენებლობა, მაღალი ენერგოეფექტურობა, ხანძარმედეგი მასალები.</p>`
  },
  {
    path: '/services/cold_storage',
    title: 'სამაცივრე კამერების მოწყობა • Importservisi',
    description: 'ხილ-ბოსტნეულისა და ხორცპროდუქტების სამაცივრე ოთახების მოწყობა სპეციალური ჰერმეტული სენდვიჩ პანელებით.',
    image: '/images/cold-storage.jpg',
    h1: 'სამაცივრე კამერები',
    content: `<h1>სამაცივრე კამერები</h1><p>დაბალტემპერატურული და საშუალოტემპერატურული სამაცივრე კამერების მოწყობა 80მმ-150მმ პანელებით.</p>`
  },
  {
    path: '/services/commercial',
    title: 'კომერციული ფართები სენდვიჩ პანელებით • Importservisi',
    description: 'მაღაზიები, სავაჭრო ცენტრები, ავტოსერვისები და პავილიონები სენდვიჩ პანელებით.',
    image: '/images/commercial.jpg',
    h1: 'კომერციული ფართები',
    content: `<h1>კომერციული ფართები</h1><p>თანამედროვე დიზაინის ენერგოეფექტური კომერციული შენობები.</p>`
  },
  {
    path: '/services/industrial',
    title: 'ინდუსტრიული შენობები • Importservisi',
    description: 'საწარმოო საამქროები, ქარხნები და ტექნიკური შენობები მაღალი ხარისხის სენდვიჩ პანელებით.',
    image: '/images/hero-bg.jpg',
    h1: 'ინდუსტრიული შენობები',
    content: `<h1>ინდუსტრიული შენობები</h1><p>მაღალი მზიდი უნარი, ვიბრაციისადმი მდგრადობა და ხმის იზოლაცია.</p>`
  },
  {
    path: '/services/agricultural',
    title: 'სასოფლო-სამეურნეო ნაგებობები • Importservisi',
    description: 'ფერმები, სათბურები და მარნები ოპტიმალური მიკროკლიმატით.',
    image: '/images/commercial.jpg',
    h1: 'სასოფლო-სამეურნეო ნაგებობები',
    content: `<h1>სასოფლო-სამეურნეო ნაგებობები</h1><p>სტაბილური ტემპერატურა და სინესტისადმი მდგრადობა.</p>`
  },
  {
    path: '/about',
    title: 'ჩვენს შესახებ • სენდვიჩ პანელების იმპორტიორი • Importservisi',
    description: '12 წლიანი გამოცდილება ქართულ ბაზარზე, 500,000+ კვ.მ გაყიდული პანელი, ბაზები თბილისსა და ქუთაისში.',
    image: '/images/warehouse-interior.jpg',
    h1: 'ჩვენს შესახებ',
    content: `
      <h1>ჩვენს შესახებ</h1>
      <p>ჩვენ ვართ სენდვიჩ პანელების წამყვანი იმპორტიორი საქართველოში. 12 წელზე მეტია, რაც ვთანამშრომლობთ თურქეთის საუკეთესო ქარხნებთან.</p>
      <p>ბაზები თბილისში (გლდანულა, ლილო) და ქუთაისში (ნიკეა).</p>
    `
  },
  {
    path: '/contact',
    title: 'კონტაქტი • Importservisi | სენდვიჩ პანელები თბილისი, ქუთაისი',
    description: 'დაგვიკავშირდით: +995 591 92 75 58. მისამართი: თბილისი (გლდანულა, ვ. ჯანჯღავას 62; ლილო), ქუთაისი (ნიკეას ქ.).',
    image: '/images/og-image.jpg',
    h1: 'კონტაქტი',
    content: `
      <h1>დაგვიკავშირდით</h1>
      <p>ტელეფონი: <a href="tel:591927558">591 92 75 58</a></p>
      <p>ელ-ფოსტა: info@importservisi.ge</p>
      <p>ბაზები: თბილისი (გლდანულა, ვ. ჯანჯღავას #62), თბილისი (ლილო), ქუთაისი (ნიკეას ქუჩა).</p>
      <p>სამუშაო საათები: ორშაბათი - შაბათი, 09:00 - 18:00.</p>
    `
  },
  {
    path: '/blog',
    title: 'ბლოგი • რჩევები და სიახლეები სენდვიჩ პანელებზე • Importservisi',
    description: 'სასარგებლო სტატიები სენდვიჩ პანელების შერჩევის, მონტაჟის, თერმოიზოლაციისა და ფასების შესახებ.',
    image: '/images/hero-bg.jpg',
    h1: 'ბლოგი და სასარგებლო რჩევები',
    content: `
      <h1>ბლოგი და სასარგებლო რჩევები</h1>
      <p>გაეცანით ჩვენს პროფესიონალურ სტატიებს სენდვიჩ პანელების შესახებ:</p>
      <ul>
        <li><a href="/blog/1">რატომ უნდა აირჩიოთ სენდვიჩ პანელები?</a></li>
        <li><a href="/blog/2">PIR თუ Rockwool? რომელი შევსებაა უკეთესი?</a></li>
        <li><a href="/blog/3">სენდვიჩ პანელების მონტაჟის თავისებურებები</a></li>
        <li><a href="/blog/4">ენერგოეფექტურობა და ეკონომია სენდვიჩ პანელებით</a></li>
        <li><a href="/blog/5">თურქული სენდვიჩ პანელები - ხარისხის გარანტია</a></li>
      </ul>
    `
  },
  {
    path: '/blog/1',
    title: 'რატომ უნდა აირჩიოთ სენდვიჩ პანელები მშენებლობისთვის? • Importservisi',
    description: 'სენდვიჩ პანელები თანამედროვე მშენებლობის განუყოფელი ნაწილია. გაიგეთ მათი უპირატესობების შესახებ.',
    image: '/images/hero-bg.jpg',
    h1: 'რატომ უნდა აირჩიოთ სენდვიჩ პანელები თქვენი მშენებლობისთვის?',
    content: `<h1>რატომ უნდა აირჩიოთ სენდვიჩ პანელები თქვენი მშენებლობისთვის?</h1><p>სენდვიჩ პანელები არის ინოვაციური სამშენებლო მასალა, რომელიც მნიშვნელოვნად ამცირებს მშენებლობის დროს და ხარჯებს. ისინი გამოირჩევიან მაღალი თერმოიზოლაციით.</p>`
  },
  {
    path: '/blog/2',
    title: 'PIR თუ Rockwool? რომელი შევსებაა უკეთესი? • Importservisi',
    description: 'PIR და Rockwool (ქვაბამბა) საიზოლაციო მასალების შედარება: თერმოიზოლაცია და ხანძარმედეგობა.',
    image: '/images/mineral-wool-vs-pir.webp',
    h1: 'PIR თუ Rockwool? რომელი შევსებაა უკეთესი?',
    content: `<h1>PIR თუ Rockwool? რომელი შევსებაა უკეთესი?</h1><p>PIR გამოირჩევა საუკეთესო თერმოიზოლაციით, ხოლო Rockwool შეუცვლელია ხანძარმედეგობის თვალსაზრისით.</p>`
  },
  {
    path: '/blog/3',
    title: 'სენდვიჩ პანელების მონტაჟის თავისებურებები • Importservisi',
    description: 'სწორი მონტაჟი პანელების ხანგრძლივი ექსპლუატაციის გარანტიაა. გაეცანით ძირითად წესებს.',
    image: '/images/roof-panels.jpg',
    h1: 'სენდვიჩ პანელების მონტაჟის თავისებურებები',
    content: `<h1>სენდვიჩ პანელების მონტაჟის თავისებურებები</h1><p>სწორი მონტაჟი მოითხოვს ჰერმეტულობის დაცვას და სპეციალური სამაგრების გამოყენებას.</p>`
  },
  {
    path: '/blog/4',
    title: 'ენერგოეფექტურობა და ეკონომია სენდვიჩ პანელებით • Importservisi',
    description: 'როგორ დავზოგოთ კომუნალური გადასახადები 40%-მდე სწორი სამშენებლო მასალებით.',
    image: '/images/wall-panels.jpg',
    h1: 'ენერგოეფექტურობა და ეკონომია სენდვიჩ პანელებით',
    content: `<h1>ენერგოეფექტურობა და ეკონომია სენდვიჩ პანელებით</h1><p>დაბალი თბოგამტარობა უზრუნველყოფს სტაბილურ ტემპერატურას და ენერგიის 40%-მდე ეკონომიას.</p>`
  },
  {
    path: '/blog/5',
    title: 'თურქული სენდვიჩ პანელები - ხარისხის გარანტია • Importservisi',
    description: 'რატომ არის თურქული წარმოების პანელები საუკეთესო არჩევანი ქართული ბაზრისთვის.',
    image: '/images/warehouse-interior.jpg',
    h1: 'თურქული სენდვიჩ პანელები - ხარისხის გარანტია',
    content: `<h1>თურქული სენდვიჩ პანელები - ხარისხის გარანტია</h1><p>თურქული ქარხნები აკმაყოფილებს საერთაშორისო ISO და CE სტანდარტებს.</p>`
  },
  {
    path: '/blog/6',
    title: 'სასაწყობე მეურნეობების მშენებლობა პანელებით • Importservisi',
    description: 'როგორ ავაშენოთ თანამედროვე საწყობი მინიმალურ დროში სენდვიჩ პანელებით.',
    image: '/images/warehouses.jpg',
    h1: 'სასაწყობე მეურნეობების მშენებლობა პანელებით',
    content: `<h1>სასაწყობე მეურნეობების მშენებლობა პანელებით</h1><p>დიდი ფართობის შენობები მძიმე საძირკვლის გარეშე.</p>`
  },
  {
    path: '/blog/7',
    title: 'მაცივარ-კამერების მოწყობა: რა უნდა ვიცოდეთ? • Importservisi',
    description: 'სპეციალური მოთხოვნები თერმოიზოლაციის მიმართ კვების პროდუქტების შენახვისას.',
    image: '/images/cold-doors.jpg',
    h1: 'მაცივარ-კამერების მოწყობა',
    content: `<h1>მაცივარ-კამერების მოწყობა</h1><p>სპეციალური 100მმ-200მმ სისქის პანელები და ჰერმეტული სამაცივრე კარებები.</p>`
  },
  {
    path: '/blog/8',
    title: 'სენდვიჩ პანელების ფერების შერჩევა RAL კატალოგით • Importservisi',
    description: 'როგორ შევუხამოთ შენობის ფასადი გარემოს და ბრენდს RAL ფერებით.',
    image: '/images/containers.jpg',
    h1: 'სენდვიჩ პანელების ფერების შერჩევა',
    content: `<h1>სენდვიჩ პანელების ფერების შერჩევა</h1><p>RAL ფერების ფართო პალიტრა ნებისმიერი არქიტექტურული დიზაინისთვის.</p>`
  },
  {
    path: '/blog/9',
    title: 'ეკოლოგიურად სუფთა მშენებლობა სენდვიჩ პანელებით • Importservisi',
    description: 'სენდვიჩ პანელების გავლენა გარემოზე და ენერგოდაზოგვა.',
    image: '/images/commercial.jpg',
    h1: 'ეკოლოგიურად სუფთა მშენებლობა',
    content: `<h1>ეკოლოგიურად სუფთა მშენებლობა</h1><p>100%-ით გადამუშავებადი ლითონი და შემცირებული CO2 ემისია.</p>`
  },
  {
    path: '/blog/10',
    title: 'მშენებლობის მომავალი: მსუბუქი კონსტრუქციები • Importservisi',
    description: 'რატომ ანაცვლებს პანელები ტრადიციულ აგურსა და ბეტონს.',
    image: '/images/cold-storage.jpg',
    h1: 'მშენებლობის მომავალი',
    content: `<h1>მშენებლობის მომავალი</h1><p>სწრაფი, მობილური და ეკონომიური კონსტრუქციები.</p>`
  }
];

const SITE_URL = 'https://importservisi.ge';

for (const route of routes) {
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const fullImageUrl = route.image.startsWith('http') ? route.image : `${SITE_URL}${route.image}`;

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);

  // Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace OG tags
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${fullImageUrl}" />`);

  // Replace Twitter tags
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${fullImageUrl}" />`);

  // Inject prerendered content into <div id="root"></div>
  // This gives crawlers instant access to the semantic content!
  const rootContent = `<div id="root"><main class="seo-prerender" style="display:contents">${route.content}</main></div>`;
  html = html.replace(/<div id="root"><\/div>/, rootContent);

  // Target directory
  const targetDir = route.path === '/' 
    ? distDir 
    : path.join(distDir, route.path.replace(/^\//, ''));

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`Prerendered: ${route.path} -> ${path.relative(distDir, targetFile)}`);
}

console.log(`\nSuccessfully prerendered ${routes.length} static HTML pages for instant Google indexing!`);
