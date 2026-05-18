"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-black/80 backdrop-blur-xl border-white/10">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">欢迎回来</CardTitle>
          <CardDescription>
            使用你的 Lingke OAC 账户登录
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Button variant="outline" type="button" onClick={() => toast.warning("未开放授权", { position: "bottom-center" })}>
                  <img 
                    src="https://www.lingke.ink/wp-content/uploads/2025/07/Lingke-b.svg" 
                    alt="Lingke Logo" 
                    className="h-5 w-5 mr-2"
                  />
                  使用 Lingke OAC 登录
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-white">
        继续即表示你同意 <a href="#">服务条款</a>{" "}
        和 <a href="#">隐私政策</a>。
      </FieldDescription>
    </div>
  )
}
