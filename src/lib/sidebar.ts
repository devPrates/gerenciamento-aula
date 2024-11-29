import {
    BookOpen,
    BookType,
    Bot,
    Frame,
    GraduationCap,
    Home,
    Inbox,
    LayoutDashboard,
    LifeBuoy,
    Map,
    PieChart,
    Replace,
    ReplaceAll,
    School,
    Search,
    Settings,
    Sparkles,
    User,
    User2,
    UserCog,
    WalletCards,
  } from "lucide-react"

export const data = {
    user: {
      name: "Administrador",
      email: "admin@example.com",
      avatar: "/user.png",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Câmpus",
        url: "/dashboard/campus",
        icon: School,
      },
      {
        title: "Cursos",
        url: "/dashboard/cursos",
        icon: WalletCards,
      },
      {
        title: "Turmas",
        url: "/dashboard/turmas",
        icon: BookType,
      },
      {
        title: "Usuários",
        url: "/dashboard/usuarios",
        icon: UserCog,
      },
      {
        title: "Substituição",
        url: "/dashboard/substituicao",
        icon: Replace,
      },
      {
        title: "Troca de Aula",
        url: "/dashboard/trocaula",
        icon: ReplaceAll,
      },
    ],
    navSecondary: [
      {
        title: "Suporte",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Configurações",
        url: "#",
        icon: Settings,
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }