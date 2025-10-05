import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Store, Search, User, Grid3x3, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const navItems = [
    { path: "/", icon: Store, label: "Store" },
    { path: "/search", icon: Search, label: "Search" },
    { path: "/categories", icon: Grid3x3, label: "Categories" },
    { path: "/account", icon: User, label: "Account" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 bg-card border-b border-border shadow-sm z-40 px-4 h-14 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="text-xl font-bold text-primary">
          Tulasi Foods
        </button>
        <button onClick={() => navigate("/cart")} className="relative">
          <ShoppingCart className="h-6 w-6 text-foreground" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground">
              {totalItems}
            </Badge>
          )}
        </button>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg md:hidden z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "flex flex-col items-center justify-center flex-1 h-full transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-card border-b border-border shadow-sm z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => navigate("/")}
                className="text-xl font-bold text-primary"
              >
                Tulasi Foods
              </button>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
            <button onClick={() => navigate("/cart")} className="relative">
              <ShoppingCart className="h-6 w-6 text-foreground" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground">
                  {totalItems}
                </Badge>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      <div className="hidden md:block h-16" />
    </div>
  );
};

export default Layout;
