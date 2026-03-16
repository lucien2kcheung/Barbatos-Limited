import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('about_title')}
            </h2>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>{t('about_text_1')}</p>
              <p>{t('about_text_2')}</p>
              <p>{t('about_text_3')}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Business meeting"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hong Kong business district"
              className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
