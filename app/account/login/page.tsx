import { GalleryVerticalEnd } from "lucide-react"

import Prism from '@/components/Prism';

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="relative min-h-svh flex items-center justify-center bg-black overflow-hidden dark">
      {/* 背景 Prism 层 */}
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="3drotate"
          timeScale={0.5}
          height={5.2}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={2}
        />
      </div>

      {/* 登录表单层 */}
      <div className="relative z-10 w-full max-w-sm p-4">
        <LoginForm />
      </div>
    </div>
  )
}
