import { Header } from "@/components/Header";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Code2, 
  MessageSquare, 
  Layers,
  Check,
  Github
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1.5">
              <Sparkles className="mr-2 h-3 w-3" />
              AI-powered MVP Studio
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Создайте свой{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MVP за минуты
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground sm:text-xl">
              Современная платформа для быстрого создания прототипов с интеграцией AI. 
              Регистрируйтесь, подключайте инструменты и запускайте свой проект.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/auth">
                <Button size="lg" variant="gradient" className="text-base">
                  Начать бесплатно
                </Button>
              </NavLink>
              <NavLink to="/#features">
                <Button size="lg" variant="outline" className="text-base">
                  Узнать больше
                </Button>
              </NavLink>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Бесплатный старт
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Без кредитной карты
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Всё необходимое для быстрого старта
            </h2>
            <p className="text-lg text-muted-foreground">
              Мощные инструменты для создания и управления вашими проектами
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Быстрая регистрация</CardTitle>
                <CardDescription>
                  Email или GitHub OAuth — выбирайте удобный способ входа
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>AI-ассистент</CardTitle>
                <CardDescription>
                  Интеллектуальный чат-интерфейс для создания и настройки проектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Личный кабинет</CardTitle>
                <CardDescription>
                  Управляйте проектами, настройками и подпиской из одного места
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>MVP-прототипы</CardTitle>
                <CardDescription>
                  Создавайте и тестируйте идеи с минимальными затратами времени
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Безопасность</CardTitle>
                <CardDescription>
                  Защита данных и приватность — наши приоритеты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Github className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>GitHub интеграция</CardTitle>
                <CardDescription>
                  Быстрый вход и синхронизация с вашим GitHub аккаунтом
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Прозрачные тарифы
            </h2>
            <p className="text-lg text-muted-foreground">
              Выберите план, который подходит именно вам
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Для знакомства с платформой</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Бесплатно</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">1 MVP проект</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Базовый AI-ассистент</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Email поддержка</span>
                  </li>
                </ul>
                <NavLink to="/auth" className="block">
                  <Button className="w-full" variant="outline">
                    Начать
                  </Button>
                </NavLink>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-accent text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                Популярный
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Для активных разработчиков</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Неограниченно проектов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Продвинутый AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">API доступ</span>
                  </li>
                </ul>
                <NavLink to="/auth" className="block">
                  <Button className="w-full" variant="gradient">
                    Выбрать Pro
                  </Button>
                </NavLink>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Для команд и больших проектов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Всё из Pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Персональный менеджер</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">SLA гарантии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Кастомные интеграции</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Связаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Готовы начать создавать?
            </h2>
            <p className="text-lg text-muted-foreground">
              Присоединяйтесь к сотням разработчиков, которые уже используют нашу платформу
            </p>
            <NavLink to="/auth">
              <Button size="lg" variant="gradient" className="text-base">
                Начать бесплатно
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                <span className="text-lg font-bold">AI MVP Studio</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Создавайте MVP быстрее с помощью AI
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#features" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="/#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
                <li><a href="/dashboard" className="hover:text-foreground transition-colors">Кабинет</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2024 AI MVP Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
