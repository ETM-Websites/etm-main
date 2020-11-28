---
title: New Client Onboarding
---
## [GitHub](https://github.com/)

Github provides the version control repo for the content & theme. All the data is stored here.

1. [Create a new organization](https://github.com/account/organizations/new?coupon=&plan=team_free) if one doesn't exist
2. Invite client to the organization repo via their email address
    * They can leave ETM as the only contributors but they should at least have the invitation
3. [Create a repo](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) from our template into the organization
4. Grant [Netlify Auth](https://github.com/settings/connections/applications/0eef2fa971fd9f7d46a2) access to the organization's repo

## [Netlify](https://www.netlify.com/)

Netlify hosts the site and triggers a new build when the github repo is updated.

1. [Create a new team](https://app.netlify.com/teams/new)
2. Create new site from organization's git repo
3. Enable Git-Gateway under [Identity > Services](https://app.netlify.com/sites/etm-websites/settings/identity#services)
4. Invite client to the team
    * Client will need a netlify account to transfer ownership

## Requirements

* Domain Name
    * Update hugo config
    * Update Netlify settings
* Logo
    * Multiple file formats & orientations are preferred, but can work with what's provided
* Colors
    * Primary
    * Secondary
* Content