import {
  AtSymbolIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  CodeIcon,
  HeartIcon,
  HomeIcon,
  NewspaperIcon,
  PaperAirplaneIcon,
  StarIcon,
} from "@heroicons/react/outline";
import { FooterElement } from "@components/Footer/FooterElement/FooterElement";
import Separator from "@components/Separator";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <Separator />
      <div className="grid w-full max-w-2xl grid-cols-3 gap-4 pb-0 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <FooterElement
            icon={<HomeIcon className="w-4 h-4 mr-1" />}
            text="Home"
            link="/"
          />
          <FooterElement
            icon={<BadgeCheckIcon className="w-4 h-4 mr-1" />}
            text="About"
            link="/about"
          />
          <FooterElement
            icon={<BriefcaseIcon className="w-4 h-4 mr-1" />}
            text="Portfolio"
            link="/portfolio"
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FooterElement
            icon={<PaperAirplaneIcon className="w-4 h-4 mr-1" />}
            text="Telegram"
            link="https://t.me/christian_devk"
          />
          <FooterElement
            icon={<StarIcon className="w-4 h-4 mr-1" />}
            text="Github"
            link="https://github.com/kuzeofficial"
          />
          <FooterElement
            icon={<HeartIcon className="w-4 h-4 mr-1" />}
            text="Twitter"
            link="https://twitter.com/cristian_devk"
          />
        </div>
        <div className="flex flex-col items-end space-y-4">
          <FooterElement
            icon={<CodeIcon className="w-4 h-4 mr-1" />}
            text="Snippets"
            link="/snippets"
          />
          <FooterElement
            icon={<NewspaperIcon className="w-4 h-4 mr-1" />}
            text="Blog"
            link="/blog"
          />
          <FooterElement
            icon={<AtSymbolIcon className="w-4 h-4 mr-1" />}
            text="Contact"
            link="/contact"
          />
        </div>
      </div>
    </footer>
  );
};
