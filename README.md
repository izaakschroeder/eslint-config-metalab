# eslint-config-metalab

Lint JavaScript MetaLab style.

## Usage

The default preset contains all of our lint rules configured for ES2015 and React.

```sh
npm install --save-dev eslint eslint-config-metalab
```

Just add the following to your `.eslintrc`:

```yaml
extends:
  - metalab
```

And run:

```sh
eslint --ignore-path .gitignore
```

## Available Presets

 * `legacy` - Old ES5/non-babel code.
 * `node` - If you're targeting the `node` platform.
 * `react` - If you're using the `react` framework.
 * `base` - If you're using ES6/modern code.

```yaml
extends:
  - metalab/legacy
```

If you need even more fine-grained control you can import things in the [rules/](rules) directory.

```yaml
extends:
  - metalab/rules/best-practices
  - metalab/rules/style
  - metalab/rules/babel
  ...
```

## Migrating

So you've set everything up but you're getting hundreds of errors because your project followed some other conventions. Don't fret! You can disable the noisiest rules by simply temporarily blacklisting them:

```yaml
extends:
  - metalab
  rules:
    noisy-rule: 0
```

Clean up the low hanging fruit and progressively iterate to bring beauty and inner peace to your project. :gem:
