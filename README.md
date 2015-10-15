# eslint-plugin-inlinecheck
Checks if a function will be considered as an inline by the v8 engine.

## Installation
You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-inlinecheck`:

```
$ npm install eslint-plugin-inlinecheck --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-inlinecheck` globally.

## Usage
Add `inlinecheck` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "inlinecheck"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json {     "rules": {         "inlinecheck/inline-check": 1     } }
