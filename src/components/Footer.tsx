import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎭</span>
              </div>
              <span className="font-montserrat font-bold text-xl">
                Союз актеров
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Бесплатная онлайн школа актерского мастерства для жителей
              Тамбовской области. Изучайте видеоуроки, выполняйте задания и
              получайте обратную связь от опытных преподавателей.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Контакты
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="text-gray-400 mr-3" />
                <span className="text-gray-300">+7 (4752) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="text-gray-400 mr-3" />
                <span className="text-gray-300">info@soyuzakterov.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="text-gray-400 mr-3" />
                <span className="text-gray-300">Тамбовская область</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="text-gray-400 mr-3" />
                <span className="text-gray-300">Пн-Вс: 9:00-21:00</span>
              </div>
            </div>
          </div>

          {/* Полезные ссылки */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Полезные ссылки
            </h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                О школе
              </a>
              <a
                href="#benefits"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Программы
              </a>
              <a
                href="#classes"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Выездные занятия
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Преподаватели
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Вопросы и ответы
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Союз актеров. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
