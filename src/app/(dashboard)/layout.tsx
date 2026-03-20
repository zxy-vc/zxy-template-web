import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase-server"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect("/login")

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-gray-50 p-6">
        <div className="mb-8 text-lg font-bold">ZXY Venture</div>
        <nav className="space-y-1">
          <a href="/dashboard" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">Dashboard</a>
          <a href="/dashboard/settings" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100">Configuración</a>
        </nav>
        <div className="mt-auto pt-6 text-xs text-gray-500">{user.email}</div>
      </aside>
      {/* Main */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
