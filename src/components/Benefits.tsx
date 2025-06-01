import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Play",
      title: "Видеоуроки по темам",
      description:
        "Обширная библиотека качественных видеоуроков по всем аспектам актерского мастерства. Смотрите в удобное время и темпе.",
      features: [
        "Уроки по постановке речи",
        "Техники импровизации",
        "Основы актерского мастерства",
      ],
    },
    {
      icon: "CheckSquare",
      title: "Практические задания",
      description:
        "Выполняйте интерактивные задания после каждого урока для закрепления материала и развития навыков.",
      features: [
        "Этюды на заданную тему",
        "Упражнения на дикцию",
        "Творческие импровизации",
      ],
    },
    {
      icon: "Users",
      title: "Проверка преподавателей",
      description:
        "Ваши работы проверяют опытные наставники - студенты выпускных курсов актерского мастерства и радиотелевизионной продукции.",
      features: [
        "Персональная обратная связь",
        "Рекомендации по улучшению",
        "Оценка прогресса",
      ],
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Как проходит обучение в "Союз актеров"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современная система онлайн-обучения с видеоуроками, практическими
            заданиями и персональной обратной связью от преподавателей
          </p>
        </div>

        {/* Карточки преимуществ */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon}
                    size={32}
                    className="text-indigo-600"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </CardDescription>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
