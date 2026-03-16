import { Calendar, MapPin, FolderOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Portfolio() {
  const { t, language } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('portfolio_title')}
          </h2>
          <p className="text-xl text-slate-600">{t('portfolio_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg border-2 border-slate-200 bg-white hover:border-slate-300 transition-all hover:shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-white border border-slate-200 flex items-center justify-center">
                <img
                  src="/Clinicon_logo.jpg"
                  alt="Clinicon Medical Ltd"
                  className="w-full h-full object-contain"
                />
              </div>
              <a
                href="https://www.clinicon.com.hk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              {t('portfolio_company_1')}
            </h3>
            <p className="leading-relaxed text-slate-700 mb-6">
              {language === 'en'
                ? 'A Hong Kong-based medical supplies and equipment distributor founded in 1980. Serves all hospitals and clinics. Authorised distributor of 3M (now Solventum) products.'
                : '一家於1980年成立的香港醫療用品及設備分銷商。服務所有醫院及診所。3M（現為Solventum）產品授權經銷商。'}
            </p>
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="h-4 w-4 text-slate-500" />
                <span>{language === 'en' ? 'January 2026' : '2026年1月'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>{language === 'en' ? 'Hong Kong' : '香港'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <FolderOpen className="h-4 w-4 text-slate-500" />
                <span>{language === 'en' ? 'Healthcare' : '醫療保健'}</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg border-2 border-slate-200 bg-white hover:border-slate-300 transition-all hover:shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-700">BML</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              BML Logistics
            </h3>
            <p className="leading-relaxed text-slate-700 mb-6">
              {language === 'en'
                ? 'A last-mile sub-contractor for leading e-commerce companies in Hong Kong.'
                : '香港領先電商企業的最後一哩路分包商。'}
            </p>
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="h-4 w-4 text-slate-500" />
                <span>{language === 'en' ? 'September 2025' : '2025年9月'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>{language === 'en' ? 'Hong Kong' : '香港'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <FolderOpen className="h-4 w-4 text-slate-500" />
                <span>{language === 'en' ? 'Logistics' : '物流'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
