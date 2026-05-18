import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  const companyName = language === 'zh' ? '巴巴托斯有限公司' : 'Barbatos Limited';

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {companyName}. {t('footer_rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
