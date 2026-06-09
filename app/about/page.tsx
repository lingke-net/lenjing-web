{/*import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";*/}
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from '@/components/Footer';

interface About3Props {
  className?: string;
  title: string;
  description?: string;
  mainImage: {
    src: string;
    alt: string;
  };
  secondaryImage: {
    src: string;
    alt: string;
  };
  breakout: {
    src?: string;
    alt?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companies?: Array<{
    src: string;
    alt: string;
  }> | null;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  contentSections?: Array<{
    title: string;
    content: string;
  }>;
}

const About3 = ({
  className,
  title = "About US",
  description = "棱镜视界是深圳瓴克网络科技有限公司旗下独立品牌，总部位于深圳瓴克总部办公区P1。我们是一家聚焦文化传媒、游戏发行运营、创意软件及数字资产开发的综合性数字创意企业。",
  mainImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg",
    alt: "about",
  },
  secondaryImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg",
    alt: "about",
  },
  breakout = {
    src: "/prism-logo-h-e.webp",
    alt: "logo",
    title: "一束光，万千世界。",
    description:
      "以 折射多元视角，创造无限世界 为核心理念，致力于将前沿技术与艺术表达相融合，在游戏、内容、工具与资产四个维度持续产出高品质的数字体验。",
    buttonText: "了解更多",
    buttonUrl: "/join-us",
  },
  companies = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      alt: "Arc",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      alt: "Descript",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      alt: "Mercury",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      alt: "Ramp",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      alt: "Retool",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      alt: "Watershed",
    },
  ],
  achievementsTitle = "我们的成就",
  achievementsDescription = "在游戏、内容、工具与资产四个维度持续产出高品质的数字体验。",
  achievements = [
    { label: "产品矩阵", value: "4+" },
    { label: "全球用户", value: "10万+" },
    { label: "合作伙伴", value: "50+" },
    { label: "团队成员", value: "30+" },
  ],
  contentSections = [
    {
      title: "我们的愿景",
      content:
        "我们相信，每一个视角都蕴藏着改变世界的力量。\n\n透过棱镜，看见不同。\n\n棱镜视界致力于将前沿技术与艺术表达相融合，为用户创造独特的数字体验。我们深信技术应该服务于创意，让每个人都能轻松表达自己的想法。",
    },
    {
      title: "我们的团队",
      content:
        "棱镜视界团队由一群热爱数字创意、技术创新与艺术表达的伙伴组成。\n\n我们来自游戏、软件开发、内容创作等多元背景，拥有丰富的行业经验和创作热情。\n\n在这里，每一个人都是创造者，每一个想法都值得被听见。我们期待与更多志同道合的伙伴一起，折射出更加精彩的世界。",
    },
  ],
}: About3Props) => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4">
        <section className={cn("py-16 lg:py-24", className)}>
          <div>
            <div className="mb-14 flex flex-col gap-5 lg:w-2/3">
              <h1 className="text-5xl font-semibold tracking-tighter text-white lg:text-6xl">
                {title}
              </h1>
              <p className="text-lg text-gray-300 md:text-xl leading-relaxed">
                {description}
              </p>
            </div>
            <div className="grid gap-7 lg:grid-cols-3">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
              />
              <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                <div className="flex flex-col justify-between gap-6 rounded-xl bg-gray-900/80 border border-gray-800 p-7 md:w-1/2 lg:w-auto">
                  <img
                    src={breakout.src}
                    alt={breakout.alt}
                    className="mr-auto h-12 dark:invert"
                  />
                  <div>
                    <p className="mb-2 text-lg font-semibold text-white">{breakout.title}</p>
                    <p className="text-gray-300">{breakout.description}</p>
                  </div>
                  <Button variant="outline" className="mr-auto" asChild>
                    <a href={breakout.buttonUrl} target="_blank">
                      {breakout.buttonText}
                    </a>
                  </Button>
                </div>
                <img
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                />
              </div>
            </div>
            {companies && (
              <div className="py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                <div className="flex gap-16 animate-marquee" style={{ width: 'max-content' }}>
                  {[...companies, ...companies].map((company, idx) => (
                    <div key={`${company.src}-${idx}`} className="flex items-center shrink-0">
                      <img
                        src={company.src}
                        alt={company.alt}
                        className="h-7 w-auto md:h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="relative overflow-hidden rounded-xl bg-gray-900/80 border border-gray-800 p-7 md:p-16">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-3xl font-medium text-white md:text-4xl">
                  {achievementsTitle}
                </h2>
                <p className="max-w-xl text-gray-300">
                  {achievementsDescription}
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between">
                {achievements.map((item, idx) => (
                  <div
                    className="flex flex-col gap-2 text-center md:text-left"
                    key={item.label + idx}
                  >
                    <span className="font-mono text-4xl font-semibold text-white md:text-5xl">
                      {item.value}
                    </span>
                    <p className="text-sm md:text-base text-gray-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {contentSections && contentSections.length > 0 && (
              <div className="mx-auto grid max-w-5xl gap-16 py-28 md:grid-cols-2 md:gap-28">
                {contentSections.map((section, idx) => (
                  <div key={section.title + idx}>
                    <h2 className="mb-5 text-4xl font-medium text-white">{section.title}</h2>
                    <p className="text-lg leading-8 whitespace-pre-line text-gray-300">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
       <Footer />
    </div>
  );
};

export default About3;
