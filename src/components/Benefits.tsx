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
      icon: "Mic",
      title: "Постановка речи",
      description:
        "Работаем над правильным и грамотным произношением, дикцией, интонацией. Учимся говорить красиво и убедительно.",
      features: [
        "Дыхательные упражнения",
        "Артикуляционная гимнастика",
        "Работа с голосом",
      ],
    },
    {
      icon: "Zap",
      title: "Развитие импровизации",
      description:
        "Тренируем умение реагировать на спонтанные ситуации, развиваем креативность и гибкость мышления.",
      features: [
        "Этюды на заданную тему",
        "Импровизационные игры",
        "Работа с партнером",
      ],
    },
    {
      icon: "Brain",
      title: "Концентрация и память",
      description:
        "Укрепляем внимание, тренируем память, развиваем фантазию через специальные актерские упражнения.",
      features: [
        "Упражнения на внимание",
        "Тренировка памяти",
        "Развитие воображения",
      ],
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Что вы получите в нашей школе
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексная программа развития актерских навыков, которая поможет
            вам раскрыть творческий потенциал
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
