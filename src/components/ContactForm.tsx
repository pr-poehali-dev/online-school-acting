import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
    console.log("Отправка формы:", formData);
    alert("Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Информация */}
          <div>
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-6">
              Начните свой путь в актерском мастерстве
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Присоединяйтесь к нашему сообществу творческих людей. Заполните
              форму, и мы подберем для вас подходящую программу обучения.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Check" size={20} className="text-green-600" />
                </div>
                <span className="text-gray-700">
                  Бесплатная консультация и тестирование
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Users" size={20} className="text-blue-600" />
                </div>
                <span className="text-gray-700">
                  Подбор группы по уровню подготовки
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Star" size={20} className="text-purple-600" />
                </div>
                <span className="text-gray-700">
                  Персональный план развития
                </span>
              </div>
            </div>
          </div>

          {/* Форма регистрации */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl text-center text-gray-900">
                Записаться на обучение
              </CardTitle>
              <CardDescription className="text-center">
                Оставьте свои контакты, и мы свяжемся с вами для записи
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  >
                    <option value="">Выберите район</option>
                    <option value="central">Центральный</option>
                    <option value="kirovsky">Кировский</option>
                    <option value="zaeltsovsky">Заельцовский</option>
                    <option value="october">Октябрьский</option>
                    <option value="sovetsky">Советский</option>
                    <option value="leninsky">Ленинский</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="experience"
                    placeholder="Ваш опыт в актерском мастерстве (необязательно)"
                    rows={3}
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 py-3"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
