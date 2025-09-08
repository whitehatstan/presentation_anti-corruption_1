import { useState } from 'react';
import { PresentationSlide } from './components/presentation-slide';
import { SlideNavigation } from './components/slide-navigation';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Титульный слайд
    <PresentationSlide key="title" className="bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">
          Классические теории возникновения государства
        </h1>
        <div className="space-y-2">
          <Badge variant="secondary" className="text-lg px-4 py-2">Теологическая теория</Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2 ml-2">Патриархальная теория</Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2 ml-2">Философская теория Платона</Badge>
        </div>
        <p className="text-xl text-muted-foreground mt-8">
          Исследование классических концепций в науке о возникновении формальных институтов власти и правопорядка
        </p>
      </div>
    </PresentationSlide>,

    // Введение
    <PresentationSlide key="intro">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6">Введение</h1>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Теологическая, патриархальная и философская (Платон) теории возникновения государства 
              являются классическими концепциями в науке, объясняющими причины появления формальных 
              институтов власти и правопорядка на разных исторических этапах.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card className="border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700">Теологическая</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Государство как результат божественного вмешательства</p>
            </CardContent>
          </Card>
          
          <Card className="border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-700">Патриархальная</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Эволюция семейных отношений в государственную власть</p>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-700">Платоновская</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Рациональное устройство на основе общественных потребностей</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PresentationSlide>,

    // Теологическая теория
    <PresentationSlide key="theological">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Теологическая теория возникновения государства</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Основная концепция</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Государство как результат прямого вмешательства Бога или высших сил. Фундамент средневековой политической мысли.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">354-430 гг.</Badge>
                Августин Блаженный
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p><strong>Трактат:</strong> "О граде Божьем"</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Государство как наказание за грехопадение</li>
                <li>Власть достается монархам "свыше"</li>
                <li>Народ не должен противостоять Божественной воле</li>
                <li>Инструмент подавления греха и поддержания порядка</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">1225-1274 гг.</Badge>
                Фома Аквинский
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p><strong>Работы:</strong> "О правлении государей"</p>
              <div>
                <p className="font-medium mb-2">Четыре вида закона:</p>
                <ol className="space-y-1 list-decimal list-inside">
                  <li><strong>Вечный</strong> - божественный фундамент</li>
                  <li><strong>Естественный</strong> - общечеловеческий</li>
                  <li><strong>Человеческий</strong> - позитивный</li>
                  <li><strong>Божественный</strong> - писанный</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <p><strong>Историческое значение:</strong> Оправдывала легитимность власти в Египте, Вавилоне, Китае, Индии, средневековой Европе</p>
          </CardContent>
        </Card>
      </div>
    </PresentationSlide>,

    // Патриархальная теория
    <PresentationSlide key="patriarchal">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Патриархальная теория возникновения государства</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Основная концепция</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Появление государства через эволюцию семейных отношений — разрастание и усложнение семейных, родовых структур.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">IV век до н.э.</Badge>
                Аристотель
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 list-disc list-inside">
                <li>Семья — основа любого общества</li>
                <li>Власть главы семьи (патриарха) перерастает в власть монарха</li>
                <li>Естественная эволюция социальных структур</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">XVII век</Badge>
                Роберт Филмер
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p><strong>Сочинение:</strong> "Патриархия, или естество королевской власти"</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Адам — первый правитель</li>
                <li>От семьи к власти над коллективом</li>
                <li>Иерархия семьи как модель государства</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Эволюция власти</h3>
            </div>
            <div className="flex items-center space-x-4">
              <Badge>Семья</Badge>
              <span>→</span>
              <Badge>Род</Badge>
              <span>→</span>
              <Badge>Племя</Badge>
              <span>→</span>
              <Badge>Община</Badge>
              <span>→</span>
              <Badge>Государство</Badge>
            </div>
            <p className="mt-4 italic">"Государство — это большая семья, во главе которой стоит отец-наставник"</p>
          </CardContent>
        </Card>
      </div>
    </PresentationSlide>,

    // Теория Платона
    <PresentationSlide key="plato">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">Теория Платона о возникновении государства</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Основная концепция</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Государство с точки зрения рационального устройства, общественных потребностей и разделения труда.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Диалог "Государство"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 list-disc list-inside">
                <li>Государство как совокупность людей, объединенных потребностью жить вместе</li>
                <li>Невозможность удовлетворения потребностей в одиночку</li>
                <li>Разделение труда как основа организации</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Принцип справедливости</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Каждый занимается своим делом, соответствующим природе и способностям</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle>Три сословия идеального государства</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-purple-100 rounded">
                <h4 className="font-medium text-purple-800">Философы</h4>
                <p className="text-sm mt-2">Правители и мудрецы</p>
              </div>
              <div className="text-center p-4 bg-purple-100 rounded">
                <h4 className="font-medium text-purple-800">Стражи</h4>
                <p className="text-sm mt-2">Воины и защитники</p>
              </div>
              <div className="text-center p-4 bg-purple-100 rounded">
                <h4 className="font-medium text-purple-800">Производители</h4>
                <p className="text-sm mt-2">Крестьяне и ремесленники</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p><strong>Цель государства:</strong> Воспитание граждан, реализация справедливости и формирование добродетельного человека</p>
          </CardContent>
        </Card>
      </div>
    </PresentationSlide>,

    // Заключение
    <PresentationSlide key="conclusion">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6">Заключение</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700">Теологическая</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Подчеркивает сакрализм власти и её связь с религией</p>
            </CardContent>
          </Card>
          
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">Патриархальная</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Родовые семейные основы возникновения государства</p>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-700">Платоновская</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Потребность гармонизации общественных интересов через разделение труда</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Общее значение теорий</h3>
            <p className="text-lg leading-relaxed">
              Все эти теории отражают этапы осмысления процессов управления, формирования морали, 
              закладывают философские основы для современных политических моделей.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Badge variant="secondary" className="text-lg px-6 py-3">
            Спасибо за внимание!
          </Badge>
        </div>
      </div>
    </PresentationSlide>
  ];

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  // Добавляем обработчик клавиш
  useState(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="pb-20">
        {slides[currentSlide]}
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}