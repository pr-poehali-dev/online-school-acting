import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎭</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              Союз актеров
            </span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              О школе
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Видеоуроки
            </a>
            <a
              href="#classes"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Онлайн занятия
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Кнопка записи */}
          <div className="hidden md:block">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Записаться бесплатно
            </Button>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              >
                О школе
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              >
                Видеоуроки
              </a>
              <a
                href="#classes"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              >
                Онлайн занятия
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              >
                Контакты
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Записаться бесплатно
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
