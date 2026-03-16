import { TrendingUp, Target, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Philosophy() {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Target,
      title: t('philosophy_1_title'),
      description: t('philosophy_1_text'),
    },
    {
      icon: TrendingUp,
      title: t('philosophy_2_title'),
      description: t('philosophy_2_text'),
    },
    {
      icon: MapPin,
      title: t('philosophy_3_title'),
      description: t('philosophy_3_text'),
    },
  ];

  return (
    <section id="philosophy" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('philosophy_title')}
          </h2>
          <p className="text-xl text-slate-600">{t('philosophy_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-slate-800/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
