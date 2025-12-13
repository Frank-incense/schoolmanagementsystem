import { useState } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  LayoutDashboard,
  Users,
  CreditCard,
  FileBarChart,
  Settings,
  Database,
  HelpCircle,
  User,
  LogOut,
  Home,
  Plus,
  AlertCircle,
  BookOpen,
  Bell,
  ChevronLeft,
  Moon,
  Sun,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, setOpen }) {
  // State for expanded/collapsed categories
  const [expandedCategories, setExpandedCategories] = useState({
    students: false,
    fees: false,
    reports: false,
    configuration: false,
    data: false,
    help: false,
    user: false
  });

  // State for sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // State for theme
  const [darkMode, setDarkMode] = useState(false);

  // Navigation data structure
  const navigationData = {
    schoolBranding: {
      name: "Fields Of Life Education Centre",
      systemName: "Finance Management System",
      version: "v2.0",
      logo: "🏫"
    },
    sections: [
      {
        id: "dashboard",
        title: "Dashboard",
        icon: <LayoutDashboard size={20} />,
        route: "/dashboard",
        badge: null,
        type: "main"
      },
      {
        id: "students",
        title: "Students",
        icon: <Users size={20} />,
        badge: "1,256",
        type: "main", 
        route: "/learners"
      },
      {
        id: "fees",
        title: "Fees & Payments",
        icon: <CreditCard size={20} />,
        badge: "3",
        type: "category",
        children: [
          { title: "Record Payment", route: "/payments/record", icon: <Plus size={16} /> },
          { title: "Fee Structures", route: "/fees/structures" },
          { title: "Vote Heads", route: "/fees/vote-heads" },
          { title: "Payment Methods", route: "/payments/methods" },
          { title: "Pending Cheques", route: "/payments/pending", badge: "3", icon: <AlertCircle size={16} /> },
          { title: "Payments in Kind", route: "/payments/kind", icon: "🎁" }
        ]
      },
      {
        id: "reports",
        title: "Reports & Analytics",
        icon: <FileBarChart size={20} />,
        type: "category",
        children: [
          { title: "Balances by Class", route: "/reports/balances" },
          { title: "Collection Summary", route: "/reports/collections" },
          { title: "Student Ledgers", route: "/reports/ledgers" },
          { title: "Active vs Inactive", route: "/reports/status" },
          { title: "Custom Reports", route: "/reports/custom", icon: <BookOpen size={16} /> }
        ]
      },
      {
        id: "configuration",
        title: "Configuration",
        icon: <Settings size={20} />,
        type: "category",
        children: [
          { title: "School Settings", route: "/settings/school", icon: "🏫" },
          { title: "Academic Terms", route: "/settings/terms", icon: "📅" },
          { title: "Class/Stream Setup", route: "/settings/classes", icon: "🏫" },
          { title: "User Management", route: "/settings/users", icon: <Users size={16} /> },
          { title: "Permissions", route: "/settings/permissions", icon: "🔒" }
        ]
      },
      {
        id: "data",
        title: "Data Management",
        icon: <Database size={20} />,
        type: "category",
        children: [
          { title: "Import/Export", route: "/data/import-export", icon: "📤" },
          { title: "Backup & Restore", route: "/data/backup", icon: "💾" },
          { title: "Audit Log", route: "/data/audit", icon: "📋" }
        ]
      }
    ],
    userSection: {
      name: "John Mwangi",
      role: "Administrator",
      status: "● Online",
      children: [
        { title: "My Profile", route: "/profile", icon: <User size={16} /> },
        { title: "Change Password", route: "/profile/password", icon: "🔐" },
        { title: "Logout", route: "/logout", icon: <LogOut size={16} /> }
      ]
    }
  };

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Toggle sidebar collapse
  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Active route state (you can replace this with your router's active route)
  const [activeRoute, setActiveRoute] = useState("/dashboard");

  // Handle navigation click
  const handleNavigationClick = (route) => {
    setActiveRoute(route);
    // Close mobile sidebar on navigation
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  // Render main navigation items
  const renderNavigationItem = (item, depth = 0) => {
    const isActive = activeRoute === item.route;
    const isExpanded = expandedCategories[item.id];
    
    if (item.type === "main") {
      return (
        <Link 
          key={item.id}
          to={item.route}
          onClick={() => handleNavigationClick(item.route)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive 
            ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600' 
            : 'text-gray-700 hover:bg-gray-50'
          } ${sidebarCollapsed ? 'justify-center' : ''}`}
        >
          <span className={isActive ? 'text-emerald-600' : 'text-gray-500'}>
            {item.icon}
          </span>
          {!sidebarCollapsed && (
            <>
              <span className="flex-1 font-medium">{item.title}</span>
              {item.badge && (
                <span className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">
                  {item.badge}
                </span>
              )}
            </>
          )}
        </Link>
      );
    }

    if (item.type === "category") {
      return (
        <div key={item.id} className="mb-1">
          <button
            onClick={() => toggleCategory(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-colors ${
              sidebarCollapsed ? 'justify-center' : ''
            } ${activeRoute.startsWith(`/${item.id}`) 
              ? 'bg-emerald-50 text-emerald-700' 
              : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className={activeRoute.startsWith(`/${item.id}`) ? 'text-emerald-600' : 'text-gray-500'}>
              {item.icon}
            </span>
            {!sidebarCollapsed && (
              <>
                <span className="flex-1 font-medium">{item.title}</span>
                {item.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">
                    {item.badge}
                  </span>
                )}
                {isExpanded ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </>
            )}
          </button>
          
          {!sidebarCollapsed && isExpanded && item.children && (
            <div className="ml-8 mt-1 space-y-1">
              {item.children.map((child, index) => {
                const childIsActive = activeRoute === child.route;
                return (
                  <Link
                    key={index}
                    to={child.route}
                    onClick={() => handleNavigationClick(child.route)}
                    className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${childIsActive 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {child.icon && (
                      <span className="text-gray-500">
                        {typeof child.icon === 'string' ? (
                          <span>{child.icon}</span>
                        ) : (
                          child.icon
                        )}
                      </span>
                    )}
                    <span className="flex-1">{child.title}</span>
                    {child.badge && (
                      <span className="px-1.5 py-0.5 text-xs font-medium bg-rose-100 text-rose-800 rounded-full">
                        {child.badge}
                      </span>
                    )}
                    {child.status && (
                      <span className="text-xs">{child.status}</span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative
        top-0 left-0
        h-screen md:h-auto
        ${sidebarCollapsed ? 'w-20' : 'w-72'}
        bg-white
        border-r border-gray-200
        shadow-lg md:shadow-sm
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-all duration-300 ease-in-out
        z-50 md:z-auto
        flex flex-col
        overflow-hidden
      `}>
        {/* School Branding Header */}
        <div className="p-4 border-b border-gray-200">
          <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!sidebarCollapsed ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-sm truncate">
                      {navigationData.schoolBranding.name}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {navigationData.schoolBranding.systemName}
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleSidebarCollapse}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>
              </>
            ) : (
              <button
                onClick={toggleSidebarCollapse}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu toggle (hidden on desktop) */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setOpen(false)}
            className="w-full flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <X size={20} />
            <span className="ml-2">Close Menu</span>
          </button>
        </div>

     

        {/* Main Navigation */}
        <div className="h-[10] flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {/* Dashboard */}
            {renderNavigationItem(navigationData.sections[0])}
            
            {/* Separator */}
            {!sidebarCollapsed && (
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Core Operations
                </span>
              </div>
            )}
            
            {/* Students, Fees, Reports */}
            {navigationData.sections.slice(1, 4).map(section => 
              renderNavigationItem(section)
            )}
            
            {/* Separator */}
            {!sidebarCollapsed && (
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  System Management
                </span>
              </div>
            )}
            
            {/* Configuration & Data Management */}
            {navigationData.sections.slice(4).map(section => 
              renderNavigationItem(section)
            )}
          </nav>
        </div>


        {/* User Profile Section */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          {!sidebarCollapsed ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <User size={20} className="text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{navigationData.userSection.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-emerald-600">{navigationData.userSection.status}</span>
                    <span className="text-xs text-gray-500">{navigationData.userSection.role}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                {navigationData.userSection.children.map((item, index) => (
                  <Link
                    key={index}
                    to={item.route}
                    className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 hover:text-emerald-600 hover:bg-white rounded"
                  >
                    {typeof item.icon === 'string' ? (
                      <span>{item.icon}</span>
                    ) : (
                      item.icon
                    )}
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-200"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={toggleSidebarCollapse}
                  className="p-2 rounded-lg hover:bg-gray-200"
                >
                  <ChevronLeft size={18} />
                </button>
              </div>
            </>
          ) : (
            // Collapsed user section
            <div className="flex flex-col items-center space-y-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <User size={16} className="text-emerald-600" />
              </div>
              <button
                onClick={toggleSidebarCollapse}
                className="p-2 rounded-lg hover:bg-gray-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile hamburger menu button (only on mobile) */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <button
          onClick={() => setOpen(!isOpen)}
          className="p-2 rounded-lg bg-emerald-600 text-white shadow-lg"
        >
          <Menu size={24} />
        </button>
      </div>
    </>
  );
}

export default Sidebar;