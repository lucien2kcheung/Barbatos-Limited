import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Recruitment() {
  const { t } = useLanguage();

  return (
    <section id="recruitment" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('recruitment_title')}
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            {t('recruitment_subtitle')}
          </p>
          <p className="text-lg text-gray-400 mb-12">
            {t('recruitment_text')}
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded hover:bg-gray-100 transition-colors group">
            {t('recruitment_cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
