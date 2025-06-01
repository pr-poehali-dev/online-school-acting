import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Заголовок */}
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Раскройте свой
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {" "}
              творческий потенциал
            </span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Бесплатная онлайн школа актерского мастерства для жителей Тамбовской
            области. Изучайте видеоуроки, выполняйте практические задания и
            получайте обратную связь от опытных преподавателей - студентов
            выпускных курсов актерского мастерства и РТП.
          </p>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3"
            >
              Начать обучение
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Смотреть видеоуроки
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                300+
              </div>
              <div className="text-gray-600">Видеоуроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Бесплатное обучение</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">20+</div>
              <div className="text-gray-600">Районов области</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
