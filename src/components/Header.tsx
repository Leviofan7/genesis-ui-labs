import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
            <span className="text-xl font-bold">AI MVP Studio</span>
          </NavLink>
          
          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/#features" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Возможности
            </NavLink>
            <NavLink 
              to="/#pricing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Тарифы
            </NavLink>
            <NavLink 
              to="/dashboard" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Кабинет
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/auth">
            <Button variant="ghost">Войти</Button>
          </NavLink>
          <NavLink to="/auth">
            <Button variant="gradient">Начать бесплатно</Button>
          </NavLink>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-4 flex flex-col gap-4">
            <NavLink 
              to="/#features" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Возможности
            </NavLink>
            <NavLink 
              to="/#pricing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Тарифы
            </NavLink>
            <NavLink 
              to="/dashboard" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Кабинет
            </NavLink>
            <div className="flex flex-col gap-2 pt-2">
              <NavLink to="/auth">
                <Button variant="ghost" className="w-full">Войти</Button>
              </NavLink>
              <NavLink to="/auth">
                <Button variant="gradient" className="w-full">Начать бесплатно</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
