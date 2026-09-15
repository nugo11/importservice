import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Phone, MessageCircle, Check, Sparkles, ShieldCheck, Flame } from 'lucide-react';

export default function QuoteInquiry() {
  const { t, i18n } = useTranslation();

  const [panelType, setPanelType] = useState<'roof' | 'wall'>('roof');
  const [coreMaterial, setCoreMaterial] = useState<'pir' | 'pur' | 'rockwool'>('pir');
  const [thickness, setThickness] = useState<number>(50);
  const [area, setArea] = useState<number>(100);

  const panelTypeName = panelType === 'roof' 
    ? (i18n.language === 'en' ? 'Roof Panel (5-rib)' : i18n.language === 'ru' ? 'Кровельная панель' : 'სახურავის პანელი (5-ტალღოვანი)')
    : (i18n.language === 'en' ? 'Wall Panel' : i18n.language === 'ru' ? 'Стеновая панель' : 'კედლის პანელი');

  const coreName = coreMaterial === 'pir' ? 'PIR' : coreMaterial === 'pur' ? 'PUR' : (i18n.language === 'en' ? 'Rockwool' : i18n.language === 'ru' ? 'Минвата' : 'ქვაბამბა');

  const whatsappMessage = encodeURIComponent(
    `გამარჯობა, importservisi.ge-დან გწერთ. მაინტერესებს მიმდინარე ფასი და მარაგები:\n- პროდუქტი: ${panelTypeName}\n- შევსება: ${coreName}\n- სისქე: ${thickness} მმ\n- სავარაუდო ფართობი: ${area} მ²\nგთხოვთ დამიკავშირდეთ დეტალებისთვის.`
  );

  return (
    <div id="quote" className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/20 text-brand-dark text-xs font-black uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4 text-brand-dark" />
            {i18n.language === 'en' ? 'Price Inquiry' : i18n.language === 'ru' ? 'Запрос стоимости' : 'ფასის დაზუსტება და ხარჯთაღრიცხვა'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
            {i18n.language === 'en' ? 'Request Current Price & Stock' : i18n.language === 'ru' ? 'Узнать актуальную цену и наличие' : 'მოითხოვეთ მიმდინარე ფასი და მარაგები'}
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base font-medium max-w-2xl">
            {i18n.language === 'en'
              ? 'Panel prices depend on volume, thickness, and delivery location. Select your parameters and get an exact quote directly from our manager.'
              : i18n.language === 'ru'
              ? 'Цены на сэндвич-панели зависят от объема заказа, толщины и локации доставки. Выберите параметры и получите точную смету у нашего менеджера.'
              : 'სენდვიჩ პანელების ფასი დამოკიდებულია შეკვეთის მოცულობაზე, სისქესა და მიწოდების ლოკაციაზე. შეარჩიეთ პარამეტრები და მიიღეთ ზუსტი შეთავაზება პირდაპირ მენეჯერისგან.'}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-brand-yellow/15 px-4 py-2 rounded-2xl border border-brand-yellow/30 shrink-0 self-start md:self-auto">
          <Sparkles className="w-5 h-5 text-brand-dark" />
          <span className="text-xs font-black text-brand-dark uppercase tracking-wider">
            {i18n.language === 'en' ? 'Direct Factory Importer' : i18n.language === 'ru' ? 'Прямой импортер' : 'პირდაპირი იმპორტიორი'}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 pt-8 items-center">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Panel Type */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2.5">
              1. {i18n.language === 'en' ? 'Panel Type' : i18n.language === 'ru' ? 'Тип панели' : 'პანელის ტიპი'}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPanelType('roof')}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left font-bold ${
                  panelType === 'roof'
                    ? 'border-brand-yellow bg-brand-yellow/10 text-brand-dark shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                }`}
              >
                <div>
                  <div className="text-sm font-black">
                    {i18n.language === 'en' ? 'Roof Panel' : i18n.language === 'ru' ? 'Кровельная' : 'სახურავის პანელი'}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">5-ტალღოვანი</div>
                </div>
                {panelType === 'roof' && <Check className="w-5 h-5 text-brand-dark" />}
              </button>

              <button
                type="button"
                onClick={() => setPanelType('wall')}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left font-bold ${
                  panelType === 'wall'
                    ? 'border-brand-yellow bg-brand-yellow/10 text-brand-dark shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                }`}
              >
                <div>
                  <div className="text-sm font-black">
                    {i18n.language === 'en' ? 'Wall Panel' : i18n.language === 'ru' ? 'Стеновая' : 'კედლის პანელი'}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">დამალული / ღია საკეტი</div>
                </div>
                {panelType === 'wall' && <Check className="w-5 h-5 text-brand-dark" />}
              </button>
            </div>
          </div>

          {/* 2. Core */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2.5">
              2. {i18n.language === 'en' ? 'Insulation Core' : i18n.language === 'ru' ? 'Наполнитель' : 'საიზოლაციო შევსება'}
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'pir', name: 'PIR', badge: 'ენერგოეფექტური', icon: Flame },
                { id: 'pur', name: 'PUR', badge: 'სტანდარტული', icon: ShieldCheck },
                { id: 'rockwool', name: 'Rockwool', badge: 'A1 ხანძარმედეგი', icon: ShieldCheck },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCoreMaterial(item.id as any)}
                  className={`p-3 sm:p-4 rounded-2xl border-2 text-center transition-all ${
                    coreMaterial === item.id
                      ? 'border-brand-yellow bg-brand-yellow/10 text-brand-dark font-black shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700 font-bold'
                  }`}
                >
                  <div className="text-sm sm:text-base font-black">{item.name}</div>
                  <div className="text-[10px] text-gray-500 mt-1 font-medium truncate">{item.badge}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Thickness */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-xs font-black uppercase tracking-wider text-gray-500">
                3. {i18n.language === 'en' ? 'Thickness (mm)' : i18n.language === 'ru' ? 'Толщина (мм)' : 'სისქე (მმ)'}
              </label>
              <span className="text-sm font-black text-brand-dark bg-gray-100 px-3 py-0.5 rounded-full">
                {thickness} მმ
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {[40, 50, 60, 80, 100, 120, 150].map((tVal) => (
                <button
                  key={tVal}
                  type="button"
                  onClick={() => setThickness(tVal)}
                  className={`py-2.5 px-2 rounded-xl border text-center transition-all text-xs font-black ${
                    thickness === tVal
                      ? 'bg-brand-dark text-white border-brand-dark shadow-md scale-105'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {tVal}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Approx Area */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2.5">
              4. {i18n.language === 'en' ? 'Approximate Area (m²)' : i18n.language === 'ru' ? 'Ориентировочная площадь (м²)' : 'სავარაუდო ფართობი (მ²)'}
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="10000"
                value={area}
                onChange={(e) => setArea(Math.max(1, Number(e.target.value)))}
                className="w-full bg-white border-2 border-gray-200 rounded-2xl py-3.5 px-4 text-base font-bold text-brand-dark focus:border-brand-yellow focus:outline-none transition-colors"
                placeholder="შეიყვანეთ კვადრატული მეტრი"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
                მ² (კვ.მ)
              </span>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  შერჩეული მოთხოვნა
                </span>
                <span className="text-xs font-black bg-brand-yellow text-brand-dark px-2.5 py-1 rounded-md">
                  {panelType === 'roof' ? 'სახურავი' : 'კედელი'} • {thickness}მმ
                </span>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">პროდუქტი:</span>
                  <span className="font-bold text-white">{panelTypeName}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">შევსება:</span>
                  <span className="font-bold text-brand-yellow">{coreName}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">სისქე:</span>
                  <span className="font-bold text-white">{thickness} მმ</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">ფართობი:</span>
                  <span className="font-bold text-white">{area} მ²</span>
                </div>
              </div>

              <div className="bg-brand-yellow/10 p-4 rounded-2xl border border-brand-yellow/20">
                <p className="text-xs text-brand-yellow font-bold leading-relaxed">
                  ✓ პანელები უკვე მარაგშია თბილისსა და ქუთაისში<br />
                  ✓ სწრაფი მიწოდება და ზომაზე დაჭრა<br />
                  ✓ სპეციალური ფასდაკლება მოცულობით შეკვეთებზე
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 space-y-3">
              <a
                href={`https://wa.me/995591927558?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-6 rounded-2xl font-black text-sm hover:brightness-110 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>ფასის გაგება WhatsApp-ში</span>
              </a>

              <a
                href="tel:591927558"
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>დარეკვა: 591 92 75 58</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
