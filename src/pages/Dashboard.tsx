import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  FolderOpen, 
  Settings, 
  CreditCard,
  MessageSquare,
  BarChart3,
  LogOut
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Dashboard = () => {
  // Mock data
  const user = {
    name: "Пользователь",
    email: "user@example.com",
    plan: "Starter",
    projectsCount: 1,
    messagesUsed: 45,
    messagesLimit: 100
  };

  const projects = [
    {
      id: 1,
      name: "Мой первый MVP",
      description: "Проект e-commerce платформы",
      updatedAt: "2 часа назад",
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Добро пожаловать, {user.name}!</h1>
          <p className="text-muted-foreground">
            Управляйте своими проектами и настройками
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Навигация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <NavLink to="/dashboard" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Проекты
                  </Button>
                </NavLink>
                <NavLink to="/dashboard/ai-chat" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    AI-чат
                  </Button>
                </NavLink>
                <NavLink to="/dashboard/analytics" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Аналитика
                  </Button>
                </NavLink>
                <NavLink to="/dashboard/billing" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Платежи
                  </Button>
                </NavLink>
                <NavLink to="/dashboard/settings" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Настройки
                  </Button>
                </NavLink>
                <div className="pt-4 border-t">
                  <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Выйти
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* User Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Ваш тариф</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary">{user.plan}</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    {user.projectsCount} из 1 проекта
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">AI сообщения</span>
                    <span className="font-medium">{user.messagesUsed}/{user.messagesLimit}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all"
                      style={{ width: `${(user.messagesUsed / user.messagesLimit) * 100}%` }}
                    />
                  </div>
                </div>
                <Button variant="gradient" className="w-full" size="sm">
                  Обновить тариф
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
                <CardDescription>
                  Начните работу с новым проектом или продолжите существующий
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="gradient" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Создать новый MVP
                </Button>
                <NavLink to="/dashboard/ai-chat">
                  <Button variant="outline" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Открыть AI-чат
                  </Button>
                </NavLink>
              </CardContent>
            </Card>

            {/* Projects List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Мои проекты</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Новый проект
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <Card key={project.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{project.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {project.description}
                          </CardDescription>
                        </div>
                        <Badge variant={project.status === "active" ? "default" : "secondary"}>
                          {project.status === "active" ? "Активен" : "Архив"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Обновлён {project.updatedAt}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            Открыть
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Empty State */}
                {projects.length === 0 && (
                  <Card className="md:col-span-2 border-dashed">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <FolderOpen className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium mb-2">Проектов пока нет</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Создайте свой первый MVP проект
                      </p>
                      <Button variant="gradient">
                        <Plus className="mr-2 h-4 w-4" />
                        Создать проект
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Getting Started */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle>Начало работы</CardTitle>
                <CardDescription>
                  Следуйте этим шагам, чтобы максимально использовать платформу
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Создайте свой первый проект</p>
                    <p className="text-sm text-muted-foreground">
                      Используйте AI-ассистента для быстрого старта
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/50 text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Настройте AI-помощника</p>
                    <p className="text-sm text-muted-foreground">
                      Персонализируйте работу под ваши задачи
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/30 text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Пригласите команду</p>
                    <p className="text-sm text-muted-foreground">
                      Работайте вместе над проектами
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
