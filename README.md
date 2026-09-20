# Northstack

Northstack's website is built with Next.js App Router, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

Application routes and global styles live in `src/app`. Shared components, structured content, utilities, types, and imported assets have dedicated directories under `src/`. Publicly served static files belong in `public/`.

## Image sources

Homepage photography is temporary editorial imagery. It does not depict Northstack employees or offices. Replace the People images with approved Northstack team photography before presenting them as company portraits. Restaurant photographs are representative; the project interfaces are illustrative previews, not captured screenshots.

| Local asset | Source |
| --- | --- |
| `services/software-developer.jpg` | [Zayed Hossain / Pexels](https://www.pexels.com/photo/focused-developer-at-dual-monitor-setup-36706459/) |
| `services/code-closeup.jpg` | [Abdul Kayum / Pexels](https://www.pexels.com/photo/close-up-of-code-on-a-screen-10845119/) |
| `services/product-workshop.jpg` | [Thirdman / Pexels](https://www.pexels.com/photo/colleagues-brainstorming-with-a-whiteboard-7181112/) |
| `services/operations-workspace.jpg` | [Cláudio Emanuel / Pexels](https://www.pexels.com/photo/programmer-working-at-desk-18935831/) |
| `people/app-design-workshop.jpg` | [ThisIsEngineering / Pexels](https://www.pexels.com/photo/engineers-designing-app-3912478/) |
| `people/developer-at-work.jpg` | [Mizuno K / Pexels](https://www.pexels.com/photo/woman-working-on-computer-in-office-12903147/) |
| `people/developer-collaboration.jpg` | [Mikhail Nilov / Pexels](https://www.pexels.com/photo/men-looking-the-monitor-together-7988757/) |
| `insights/developer-reviewing-code.jpg` | [Mizuno K / Pexels](https://www.pexels.com/photo/back-view-of-a-blond-woman-in-an-office-looking-at-two-computer-screens-with-multicoloured-code-12899189/) |
| `insights/code-detail.jpg` | [Al Nahian / Pexels](https://www.pexels.com/photo/computer-program-on-computer-screen-7325498/) |

The temporary homepage showreel and poster are from [Mikhail Nilov / Pexels](https://www.pexels.com/video/men-working-together-in-an-office-7989689/). They show representative software collaboration, not Northstack staff or an official Northstack office. Replace both files with approved company media before production.

The five abstract marks in `src/data/trustedBy.ts` are temporary design placeholders. They do not represent clients or endorsements and must be replaced with verified customer logos before production.

The three abstract marks in `src/data/partners.ts` are also design placeholders. Replace them with verified Northstack partner logos before production.

The homepage inquiry form currently performs browser-side validation only. It does not send messages; visitors are directed to `hello@northstack.fi` until a delivery endpoint is connected.
