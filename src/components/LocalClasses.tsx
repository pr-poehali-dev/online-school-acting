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
    { name: "Тамбов", available: true, nextClass: "15 января" },
    { name: "Мичуринск", available: true, nextClass: "18 января" },
    { name: "Рассказово", available: true, nextClass: "22 января" },
    { name: "Моршанск", available: false, nextClass: "Скоро" },
    { name: "Котовск", available: true, nextClass: "25 января" },
    { name: "Уварово", available: true, nextClass: "28 января" },
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
            Онлайн занятия для Тамбовской области
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Участвуйте в онлайн мастер-классах и групповых занятиях!
            Интерактивные вебинары с преподавателями для жителей всех районов
            области
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
                    Как проходят онлайн занятия
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  Еженедельные интерактивные вебинары с преподавателями.
                  Групповые упражнения, разбор заданий, ответы на вопросы. Живое
                  общение и практика в режиме реального времени.
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Icon
                      name="Clock"
                      size={20}
                      className="text-indigo-600 mr-3"
                    />
                    <span className="text-gray-700">
                      Продолжительность: 2 часа
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Users"
                      size={20}
                      className="text-indigo-600 mr-3"
                    />
                    <span className="text-gray-700">Группы до 20 человек</span>
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
                  Записаться на вебинар
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Районы */}
          <div>
            <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-6">
              Активные районы области
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
