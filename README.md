# Collers - Baykar Design Case

A website UI built using Next.js (App Router), React, React Server Components, TailwindCSS, and TypeScript.

Deployed demo: https://main--collers-design-case.netlify.app/

## Technical Decisions and Details About the Project

For this project, TailwindCSS is a better choice than Bootstrap because the design suits TailwindCSS much more than Bootstrap, and also Bootstrap is bloated. It comes with unnecessary styles that is hard to change or override, effectively making the codebase more fragile for future development in terms of styling.

TailwindCSS is more like a design system than a simple CSS framework. That's why I initially considered going with Radix Primitives + TailwindCSS as this is a great combo, unstyled yet accessible and performant primitive components and the power and structured approach TailwindCSS brings. But as the case study is one page, it would only bring in additional complexity so I decided against that.

As for why I chose React and Next.js, React is a very mature and widely used UI library that is a joy to use. With Next.js complementing React and adding the features React is missing, it is very fun and enjoyable to develop. For this case study, I used Next.js with App Router to benefit from React Server Components as it has been more than a year since RSC was announced and it is much more stable now. The benefits of this approach is hard to notice on small projects, however as the project grows, static components (i.e. just returning some markup) start to be included during the build process and over time this causes the JS delivered to the client to only increase, hurting performance. With RSCs, components that do not have reactivity are not included in the build process, therefore, as the project grows, only dynamic components will slowly increase the bundle size.

I also used TypeScript to leverage type-safety and static code analysis for possible type-related bugs. TypeScript helped me a lot while structuring the data the components should receive as I had a clear idea with restricted types which improved my development speed and efficiency quite a lot.

For component architecture, I tried to employ as much composability and reusability as possible. For example, every component has their props typed, receive data from outside, and have their own mock files for demonstration. During development, I imagined working with any headless CMS for content management and structured the props as if they were coming from the CMS.

## Technologies and Resources Used

- React
- TailwindCSS
- Next.js
- Next Image
- Next Font
- TypeScript
- Swiper
