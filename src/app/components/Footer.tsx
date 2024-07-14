import Link from "next/link";
import Image from "next/image";

export type FooterProps = {
  categories: {
    categoryTitle: string;
    categoryItems: {
      categoryItemTitle: string;
      categoryItemUrl: string;
    }[];
  }[];
  appStoreIcons: {
    title: string;
    icons: {
      iconImage: string;
      iconImageAlt: string;
      iconWidth: number;
      iconHeight: number;
      iconUrl: string;
    }[];
  };
  socials: {
    title: string;
    segments: {
      segmentTitle: string;
      segmentIcon: string;
      segmentUrl: string;
    }[];
  };
  copyright: string;
  privacyLinks: {
    privacyLinkTitle: string;
    privacyLinkUrl: string;
  }[];
  languageSelection: {
    languageIcon: string;
    languages: {
      languageTitle: string;
      languageCode: string;
    }[];
  };
};

export function Footer({
  categories,
  appStoreIcons,
  socials,
  copyright,
  privacyLinks,
  languageSelection,
}: FooterProps) {
  return (
    <footer className="bg-baykar-black px-4 py-12 text-center font-roboto text-white desktop:px-20 desktop:py-12">
      <div className="desktop:col contents desktop:grid desktop:grid-cols-4 desktop:content-between">
        <div className="flex flex-col items-center gap-12 desktop:col-span-3 desktop:grid desktop:grid-cols-3 desktop:gap-12">
          {categories.map((category) => (
            <div
              key={crypto.randomUUID()}
              className="flex flex-col gap-3 desktop:items-start"
            >
              <h3 className="font-medium">{category.categoryTitle}</h3>
              <ul className="flex flex-col items-center gap-3 desktop:items-start desktop:gap-6">
                {category.categoryItems.map((categoryItem) => (
                  <li key={crypto.randomUUID()} className="leading-0">
                    <Link href={categoryItem.categoryItemUrl}>
                      {categoryItem.categoryItemTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="contents desktop:flex desktop:flex-col">
          <div className="mt-12 flex flex-col items-center desktop:mt-0 desktop:items-start">
            <h3 className="font-medium">{appStoreIcons.title}</h3>
            <div className="mt-5 flex flex-col items-center gap-3 desktop:items-start">
              {appStoreIcons.icons.map((icon) => (
                <Link key={crypto.randomUUID()} href={icon.iconUrl}>
                  <Image
                    src={icon.iconImage}
                    alt={icon.iconImageAlt}
                    width={icon.iconWidth}
                    height={icon.iconHeight}
                    className="cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center desktop:items-start">
            <h3 className="font-medium">{socials.title}</h3>
            <div className="mt-5 flex items-center gap-4 desktop:mt-5">
              {socials.segments.map((segment) => (
                <Link key={crypto.randomUUID()} href={segment.segmentUrl}>
                  <Image
                    src={segment.segmentIcon}
                    alt={segment.segmentIcon}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[3.25rem] border-t border-white/50 px-[1.875rem] pt-12 desktop:flex desktop:items-center desktop:justify-between desktop:pt-9">
        <p className="leading-0 text-center">{copyright}</p>
        <div className="mt-6 flex items-center justify-center gap-8">
          {privacyLinks.map((privacyLink) => (
            <Link key={crypto.randomUUID()} href={privacyLink.privacyLinkUrl}>
              {privacyLink.privacyLinkTitle}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Image
              src={languageSelection.languageIcon}
              alt={languageSelection.languageIcon}
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <span className="">
              {languageSelection.languages[0].languageCode.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
