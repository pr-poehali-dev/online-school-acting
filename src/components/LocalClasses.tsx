import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const LocalClasses = () => {
  const districts = [
    { name: "Центральный", available: true, nextClass: "15 января" },
    { name: "Кировский", available: true, nextClass: "18 января" },
    { name: "Заельцовский", available: true, nextClass: "22 января" },
    { name: "Октябрьский", available: false, nextClass: "Скоро" },
    { name: "Советский", available: true, nextClass: "25 января" },
    { name: "Ленинский", available: true, nextClass: "28 января" },
  ];

  return (
    <section
      id="classes"
      className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Выездные занятия по районам
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы приезжаем к вам! Очные мастер-классы и практические занятия в
            удобных локациях вашего района
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Информация о выездах */}
          <div>
            <Card className="p-8 shadow-lg border-0">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-amber-600" />
                  </div>
                  <CardTitle className="font-montserrat text-2xl text-gray-900">
                    Как проходят выезды
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  Каждые выходные наши педагоги проводят 3-часовые интенсивы в
                  районных культурных центрах. Практические занятия, работа в
                  группах, индивидуальные консультации.
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Icon
                      name="Clock"
                      size={20}
                      className="text-indigo-600 mr-3"
                    />
                    <span className="text-gray-700">
                      Продолжительность: 3 часа
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Users"
                      size={20}
                      className="text-indigo-600 mr-3"
                    />
                    <span className="text-gray-700">Группы до 15 человек</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Award"
                      size={20}
                      className="text-indigo-600 mr-3"
                    />
                    <span className="text-gray-700">Сертификат участия</span>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на выезд
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Районы */}
          <div>
            <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-6">
              Доступные районы
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {districts.map((district, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {district.name}
                    </h4>
                    <Badge
                      variant={district.available ? "default" : "secondary"}
                    >
                      {district.available ? "Доступно" : "Скоро"}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Следующее: {district.nextClass}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalClasses;
