# markdown-it-mentions
markdown-it plugin to support Twitter like mentions

<a href="https://www.patreon.com/sergiodxa">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage
Download it with

```bash
yarn add markdown-it-mentions
# npm i markdown-it-mentions
```

Then use it as any markdown-it plugin

```js
import md from 'markdown-it';
import mentions from 'markdown-it-mentions';

const markdown = '@sergiodxa';

// optional
function parseURL(username) {
  return `https://twitter.com/@${username}``
}

md()
  .use(mentions, { parseURL, external: true })
  .render(markdown)
```

This will transform every string starting with `@` to a link to Twitter using the text after the `@` as the username.

The optional `parseURL` function allow you to customize the final URL to use another site like Github or a completely personal one.

The optional `external` property (default to `false`) add a `target="_blank"` attribute if it's `true` and `target="_self"` if it's `false`.
