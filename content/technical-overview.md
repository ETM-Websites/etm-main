---
title: Technical Overview
---
## Strategy

Focusing on companies with lacking web presence. Whether that’s no website at all, outdated or poorly constructed. Providing a pre-designed theme, ready to be populated with content, not convincing them to buy a $100k custom design & build.

The client owns everything upon completion, not reliant on our hosting, CDN, or other services. They should be able to bring in a developer to extend their site without having to ask us a question, export data or transfer ownership. Or in the event we meet our demise, the client(s) won’t have to worry about their site access.

## Technology

Static site generators have become increasingly popular as of late, especially for marketing & blog sites. They benefit from performance since the server just has to provide static files instead of running database queries and security since there’s not a server to jeopardize. [Hugo](https://gohugo.io/) is one of the more popular & reputable options, with [11ty](https://www.11ty.dev/) being a popular up & coming static site generator. This is considered a Jamstack approach and there are varying degrees of complexity, with this being kind of a baseline versus that of a JS framework tied to a REST or GraphQL API.

Keep frameworks to a minimum, using native elements as much as possible with least amount of vanilla JS required. No frameworks such as Vue, React, Angular, etc. Dependencies on dependencies on dependencies increases the likelihood for maintenance.

## Hosting

[Netlify](https://www.netlify.com/) has become a popular hosting provider for static sites or Jamstack solutions. Their [pricing page](https://www.netlify.com/pricing/) lays out the various tiers, starting with an impressive free tier and only improves from there.

## CMS

The beauty of Hugo & markdown is the flexibility in choosing a CMS, which [Hugo has a list](https://gohugo.io/tools/frontends/) of but I’ve selected a couple below. Theoretically, content for a hugo website could be managed by multiple services that update markdown files in the repo.

### [Netlify CMS](https://netlifycms.org/) - *(recommended)*

It’s always nice to have the fewest number of services to register or sign-up for when dealing with websites. Fewer bills to keep track of, fewer newsletters, fewer credentials to remember. Netlify CMS is a script placed in the site accessible by navigating to `/admin`. It's fairly straightforward & customizable. Smashing Magazine actually [switched from WordPress to Netlify CMS](https://www.smashingmagazine.com/2020/01/migration-from-wordpress-to-jamstack/), along with the Hugo static-site generator when they saw it was 90% more performant. With Netlify CMS being used by such a big company provides some security that it's not going to suddenly drop service.

### [Forestry](https://forestry.io/)

Forestry is another CMS that updates the git repo with the markdown files. It’s a decent looking CMS, but being a separate URL, potential deactivation or extra monthly cost doesn’t seem worth it.

### [Dato CMS](https://www.datocms.com/)

While Dato does work with Hugo, I’ve tested out the CMS and it seems like the data lives on Dato, theme is in GitHub and built on Netlify. Not my favorite structure, but it’s an option.

## Images

WordPress provided the feature to define the image sizes you needed and it’d create the variety of images needed for the site. This actually created probably 5 times more images than needed, taking up unnecessary storage. Static sites have a risk of uploading images that are too large as there’s no accountability. One solution is Netlify’s suggestion of using [Git LFS](https://git-lfs.github.com/) with its ability to [transform images](https://docs.netlify.com/large-media/transform-images/) on the fly. Another option is hooking up a media CDN such as [Cloudinary](https://cloudinary.com/) to optimize and scale images as necessary.

## Maintenance

This structure is designed to require minimum maintenance. Static sites means no server technology to maintain and the CDN provision removes any concern of security that you typically have with WordPress’ regular updates. Native html & vanilla javascript means less reliance on dependencies into eternity. Really the only thing to “maintain” is updating Hugo or Netlify CMS to take advantage of new features.

## Search Engines

A sitemap & basic meta tags are a must. Accessibility, responsiveness & performance are also factors in SEO but those are musts either way. This isn't meant for competing in the search rankings as much as the ability to be indexed by crawlers.

## Browser Support

Modern browsers. A banner can be displayed for IE showing *“this site may not function properly”* but not testing and debugging IE.