# nordcode

## Getting startd

Run the following command:

```sh
pnpm i
```

Run single package (e.g. `@nordcode/web`)

```sh
pnpm --filter "@nordcode/web" dev
```

Run all packages

```sh
pnpm dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: astro website
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm dev
```

### Generate

To generate a new app or package, run the following command:

```sh
pnpm gen
```

### Version and Publish

Also see [changesets/intro](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)

To add a new changeset, run the following command:

```sh
pnpm changeset
```

To create a new version of packages, run the following command:

```sh
pnpm version-packages
```

To publish all changes ([turbo/publishing-packages](https://turbo.build/repo/docs/handbook/publishing-packages/versioning-and-publishing#using-changesets-with-turborepo)) to npm, run the following command:

```sh
pnpm publish-packages
```

To [check for changesets](https://github.com/changesets/changesets/blob/main/docs/checking-for-changesets.md), run the following command:

```sh
pnpm changeset-status
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Inspiration

- <https://www.domesiconcepthouse.cz/>
- <https://tailwindcss.com/>
- <https://www.earlydog.com/>
- <https://make.studio/>
- <https://titansinkware.com/>
- <https://www.createwithplay.com/>
- <https://clay.global/> *
- <https://wise.com/de/>
- <https://stripe.com/sessions> *
- <https://resend.com/> *
- <https://www.samesame.studio/>
