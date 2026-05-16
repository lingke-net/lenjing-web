"use client";

import Footer from '@/components/Footer';

import { motion } from "framer-motion";
import { BlurText } from "@/components/BlurText";

export default function JoinPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#050508" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BlurText
              text="我们正在规划新的招收计划，您可以关注我们的社交媒体或者Lingke瓴克社会招聘页面获取最新消息！"
              blurAmount={30}
              animationDuration={1.5}
              className="text-xl md:text-2xl text-white/100 leading-relaxed"
              delay={500}
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
