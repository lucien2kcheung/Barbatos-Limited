import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  const companyName = language === 'zh' ? '巴巴托斯有限公司' : 'Barbatos Limited';

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/transparent-logo.png" alt="Barbatos Limited" className="h-16 w-auto" />
            <span className="text-lg font-semibold text-white">
              {companyName}
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {companyName}. {t('footer_rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
