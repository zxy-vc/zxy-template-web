import { createServerSupabaseClient } from "@/lib/supabase-server"

export default async function DashboardPage() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Bienvenido, {user?.email}</p>
      {/* TODO: venture-specific content */}
    </div>
  )
}
