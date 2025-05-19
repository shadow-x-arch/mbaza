"use client"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <span className="p-1">
          <ModeToggle />
        </span>
      </div>
      <div className={cn("flex flex-col gap-1", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form onSubmit={handleLogin} className="p-6 md:p-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-2xl font-bold">Welcome</h4>
                  <p className="text-balance text-muted-foreground">
                    Login to your MBAZA account
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && (
                  <div className="text-sm text-red-500 text-center">
                    {error}
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>

                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="w-full" onClick={() => {}}>Apple</Button>
                  <Button variant="outline" className="w-full" onClick={() => {}}>Google</Button>
                  <Button variant="outline" className="w-full" onClick={() => {}}>Meta</Button>
                </div>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </div>
            </form>
            <div className="relative hidden bg-muted md:block">
              <img
                src="https://www.rwandainindia.gov.rw/index.php?eID=dumpFile&t=f&f=17300&token=7cbb3647b3af543df276abbd165d5582483dd801"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7]"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
