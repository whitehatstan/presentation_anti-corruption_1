import { useState } from 'react';
import { PresentationSlide } from './components/presentation-slide';
import { SlideNavigation } from './components/slide-navigation';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';

// Импорт изображений
import augustineImage from 'figma:asset/df4346de1084d7ba9cb17a5a70eb3464d9821c74.png';
import aquinasImage from 'figma:asset/65f40597ca5447fb2afe888b1cd00d7eab3e8137.png';
import aristotleImage from 'figma:asset/58b48069a5ea254d9abd64eaa99d397532f83c2e.png';
import filmerImage from 'figma:asset/fccee8b481acc6454ef3426df6aec7523c937319.png';
import platoImage from 'figma:asset/4ec97fda82b1aab8aca2cc784247d07b1e3ba5fa.png';

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
            <p className="text-lg leading-relaxed mb-4">
              Теории происхождения государства представляют собой попытки объяснить причины и механизмы 
              формирования государственных структур в человеческом обществе.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              В этом докладе мы рассмотрим три ключевые теории: теологическую, патриархальную и теорию Платона. 
              Каждая из них отражает исторический и философский контекст своего времени, предлагая уникальный 
              взгляд на роль государства в жизни людей.
            </p>
            <p className="text-lg leading-relaxed italic">
              Давайте разберем их по порядку, чтобы было удобно следить за логикой.
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
          <CardContent className="space-y-3">
            <p>Государство создано по воле Бога, а не людьми. Власть правителей происходит от божественного источника, и подданные должны ей подчиняться как части небесного плана.</p>
            <p className="text-sm text-muted-foreground">Это не просто объяснение, а моральное обоснование: государство — инструмент Бога для поддержания порядка, справедливости и наказания грехов.</p>
            <p className="text-xs italic">В древних цивилизациях правители считались воплощениями богов на земле, что делало их власть абсолютной и священной.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <img 
                  src={augustineImage} 
                  alt="Августин Блаженный" 
                  className="w-24 h-24 rounded-full object-cover border-3 border-blue-200 shadow-lg"
                />
                <div>
                  <Badge variant="outline" className="mb-1">354-430 гг.</Badge>
                  <div>Августин Блаженный</div>
                </div>
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
              <CardTitle className="flex items-center gap-3">
                <img 
                  src={aquinasImage} 
                  alt="Фома Аквинский" 
                  className="w-24 h-24 rounded-full object-cover border-3 border-blue-200 shadow-lg"
                />
                <div>
                  <Badge variant="outline" className="mb-1">1225-1274 гг.</Badge>
                  <div>Фома Аквинский</div>
                </div>
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
          <CardHeader>
            <CardTitle className="text-lg">Историческое значение и библейские основания</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p><strong>Древние цивилизации:</strong> Египет ("Поучения Птаххотепа"), Вавилон ("Законы Хаммурапи"), Индия ("Веды", "Законы Ману"), Китай</p>
            <p><strong>Библейское обоснование:</strong> Послание к Римлянам: "Всякая душа да будет покорна высшим властям, ибо нет власти не от Бога"</p>
            <p><strong>Современность:</strong> Официальная доктрина Католической церкви, Ватикан</p>
          </CardContent>
        </Card>
      </div>
    </PresentationSlide>,

    // Теологическая теория - современные мыслители
    <PresentationSlide key="theological-modern">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Теологическая теория: современные мыслители</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>XVIII-XIX века</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p><strong>Жозеф де Местр</strong></p>
                <p><strong>Жак Маритен</strong> - "Интегральный гуманизм", "О политическом праве"</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Современность</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p><strong>Дезире Жозеф Мерсье</strong></p>
              <p><strong>Жан Маритен</strong> - адаптация к современным реалиям</p>
              <p className="text-sm text-muted-foreground">Остается официальной доктриной Католической церкви</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle>Критика и значение</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="mb-4">
              <p className="font-medium mb-2">Дополнительные концепции:</p>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li><strong>"Божественное право королей"</strong> (XVII век) - власть напрямую от Бога</li>
                <li><strong>Политическая теология</strong> - современная эволюция теории</li>
                <li>Государство как отражение божественного суверенитета</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-green-700 mb-2">Достоинства:</p>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  <li>Стабилизирует общество через послушание</li>
                  <li>Оправдывала монархии и теократии</li>
                  <li>Подчеркивает вечность государства</li>
                  <li>Создает гармонию с высшими силами</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-red-700 mb-2">Недостатки:</p>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  <li>Основана на вере, а не на фактах</li>
                  <li>Не объясняет разные государства у разных богов</li>
                  <li>Может оправдывать тиранию</li>
                  <li>Мировоззренческая основа, не научная гипотеза</li>
                </ul>
              </div>
            </div>
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
          <CardContent className="space-y-3">
            <p>Государство как естественное расширение семьи, где власть главы семьи (патриарха) эволюционирует в власть правителя.</p>
            <p className="text-sm text-muted-foreground">Люди — социальные существа, и семья как базовая единица растет: от одной семьи к роду, племени и, наконец, к государству.</p>
            <p className="text-xs italic">Монарх здесь — как отец, заботящийся о "детях-подданных", а они отвечают лояльностью. Это органический процесс, подчеркивающий традиции и иерархию.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <img 
                  src={aristotleImage} 
                  alt="Аристотель" 
                  className="w-24 h-24 rounded-full object-cover border-3 border-green-200 shadow-lg"
                />
                <div>
                  <Badge variant="outline" className="mb-1">IV век до н.э.</Badge>
                  <div>Аристотель</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 list-disc list-inside">
                <li>Семья — основа любого общества</li>
                <li>Вл��сть главы семьи (патриарха) перерастает в власть монарха</li>
                <li>Государство — объединение семей и деревень для самодостаточности</li>
                <li>Естественная эволюция социальных структур</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">В Древнем Китае Конфуций сравнивал императора с "сыном Неба"</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <img 
                  src={filmerImage} 
                  alt="Роберт Филмер" 
                  className="w-24 h-24 rounded-full object-cover border-3 border-green-200 shadow-lg"
                />
                <div>
                  <Badge variant="outline" className="mb-1">XVII век</Badge>
                  <div>Роберт Филмер</div>
                </div>
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

    // Патриархальная теория - детали и критика
    <PresentationSlide key="patriarchal-details">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Патриархальная теория: детали и анализ</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Исторические примеры</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p><strong>Древний Рим:</strong> Патриархальная структура семьи (paterfamilias) зеркально отражалась в государстве</p>
                <p><strong>Древний Китай:</strong> Конфуций сравнивал императора с отцом, подчеркивая добродетели — сыновнюю почтительность и заботу</p>
                <p><strong>Россия XIX века:</strong> Николай Михайловский - община эволюционировала из родовых связей</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Принцип гармонии</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Как в семье отец обеспечивает порядок, так и в государстве правитель предотвращает хаос</p>
              <p className="text-sm text-muted-foreground">Объясняет акцент патриархальных обществ на традиции и иерархию</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle>Достоинства и недостатки теории</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="mb-4">
              <p className="font-medium mb-2">Интересные аспекты:</p>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li><strong>Гендерный аспект:</strong> патриархат vs матриархальная версия (африканские племена)</li>
                <li><strong>Критика Дженкса:</strong> государство возникло из племен, а не семей</li>
                <li>Способствовало стабильности империй через семейные ценности</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-green-700 mb-3">Достоинства:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Способствует уважению к власти через семейный долг</li>
                  <li>Отражает эволюцию от первобытных общин</li>
                  <li>Мост между микро- и макроуровнями общества</li>
                  <li>Актуальна для традиционных обществ</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-red-700 mb-3">Недостатки:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Игнорирует конфликты: семьи не всегда гармоничны</li>
                  <li>Не объясняет демократии или революции</li>
                  <li>Может оправдывать авторитаризм как "отцовскую заботу"</li>
                  <li>Государство добавляет принуждение, которого нет в семье</li>
                </ul>
              </div>
            </div>
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
          <CardContent className="space-y-3">
            <p>Государство как результат человеческих нужд и разделения труда. Люди не самодостаточны: один не может производить все — еду, одежду, жилье.</p>
            <p className="italic text-primary">"Государство возникает из-за того, что каждый из нас не может удовлетворить сам себя, но во многом еще нуждается"</p>
            <p className="text-sm text-muted-foreground">Это рациональный процесс для достижения справедливости и общего блага.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <img 
                  src={platoImage} 
                  alt="Платон" 
                  className="w-24 h-24 rounded-full object-cover border-3 border-purple-200 shadow-lg"
                />
                <div>Диалог "Государство"</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p><strong>Идеальное государство — аристократия,</strong> где правят философы, знающие вечные идеи (Формы).</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Общество делится на три класса: правители (разум), воины (дух) и производители (желания)</li>
                <li>Аналогия с душой человека</li>
                <li>Правители отбираются через образование: гимнастика, музыка и философия</li>
                <li>С 35 лет они правят после строгой подготовки</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Принцип справедливости</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Справедливость достигается, когда каждая часть выполняет свою роль гармонично.</p>
              <p className="text-sm text-muted-foreground">Нет частной собственности у элиты — все общее, включая семьи, чтобы избежать коррупции.</p>
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

    // Теория Платона - идеальное государство
    <PresentationSlide key="plato-ideal">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">Идеальное государство Платона</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Аристократия - правление лучших</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 list-disc list-inside">
                <li>Правят философы или цари-философы</li>
                <li>Отбор через строгую систему образования</li>
                <li>15-летняя подготовка до начала правления в 35 лет</li>
                <li>Созерцание вечных идей, особенно идеи блага</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Особенности организации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 list-disc list-inside">
                <li>Нет частной собственности у правителей и воинов</li>
                <li>Общие имущество, жены и дети</li>
                <li>Регулируемое размножение элиты</li>
                <li>Образование: гимнастика + музыка + философия</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle>Деградирующие формы правления</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-purple-100 rounded">
                <h4 className="font-medium text-purple-800">Тимократия</h4>
                <p className="text-xs mt-1">Власть воинов</p>
              </div>
              <div className="p-3 bg-purple-100 rounded">
                <h4 className="font-medium text-purple-800">Олигархия</h4>
                <p className="text-xs mt-1">Власть богатых</p>
              </div>
              <div className="p-3 bg-purple-100 rounded">
                <h4 className="font-medium text-purple-800">Демократия</h4>
                <p className="text-xs mt-1">Власть толпы</p>
              </div>
              <div className="p-3 bg-purple-100 rounded">
                <h4 className="font-medium text-purple-800">Тирания</h4>
                <p className="text-xs mt-1">Худшая из всех</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-3">
            <p><strong>Миф о "металлах":</strong> Золото для правителей, серебро для воинов, бронза/железо для демоса, но с возможностью социальной мобильности для талантливых</p>
            <div className="mt-4">
              <p className="font-medium mb-2">Связь с теорией Форм:</p>
              <p className="text-sm">Реальный мир — тень идей, и философы, созерцающие Идею Блага, ведут государство к истине. Влияние на утопии Томаса Мора и современные меритократии.</p>
            </div>
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
            <p className="text-lg leading-relaxed mb-4">
              Теологическая, патриархальная и платоновская теории показывают разнообразие взглядов на государство: 
              от божественного дара и семейного роста до рациональной организации.
            </p>
            <p className="text-lg leading-relaxed">
              Они помогают анализировать современные общества, подчеркивая вечные вопросы о власти, 
              справедливости и человеческой природе.
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