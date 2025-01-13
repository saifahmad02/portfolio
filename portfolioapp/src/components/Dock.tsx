import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconFileCv,
  IconHome,
  IconTerminal2,
  IconUserCircle,
  IconBriefcase2,
  IconAffiliate
} from "@tabler/icons-react";

const Dock = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
            },
        {
            title: "About Me",
            icon: (
                <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
            title: "Work Experience",
            icon: (
                <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#experience",
        },
        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Get In Touch",
            icon: (
                <IconAffiliate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#footer",
        },
        {
          title: "Resume",
          icon: (
            <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/saifahmad02",
        },
      ];
      return (
        <div className="fixed bottom-0 mb-4 opacity-60 hover:opacity-100">
          <FloatingDock
            items={links}
          />
        </div>
      );
}

export default Dock