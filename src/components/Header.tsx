import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/Barbatos_logo.jpg" alt="Barbatos Limited" className="h-14 w-auto" />
            <span className="text-xl font-semibold text-slate-800">
              {language === 'zh' ? '巴巴托斯有限公司' : 'Barbatos Limited'}
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              {t('nav_about')}
            </button>
            <button onClick={() => scrollToSection('philosophy')} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              {t('nav_philosophy')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              {t('nav_portfolio')}
            </button>
            <button onClick={() => scrollToSection('team')} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              {t('nav_team')}
            </button>
            <button onClick={() => scrollToSection('recruitment')} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              {t('nav_recruitment')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              {t('nav_contact')}
            </button>

            <div className="flex items-center space-x-2 ml-4 border-l pl-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'en' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'zh' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                繁中
              </button>
            </div>
          </nav>

          <button
            className="lg:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav_about')}
            </button>
            <button onClick={() => scrollToSection('philosophy')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav_philosophy')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav_portfolio')}
            </button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav_team')}
            </button>
            <button onClick={() => scrollToSection('recruitment')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav_recruitment')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav_contact')}
            </button>

            <div className="flex items-center space-x-2 pt-3 border-t">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 px-3 py-2 rounded transition-colors ${
                  language === 'en' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-900 border'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`flex-1 px-3 py-2 rounded transition-colors ${
                  language === 'zh' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-900 border'
                }`}
              >
                繁中
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
