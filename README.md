# Opacity 🔎

<p>
<a href="https://www.npmjs.com/opacity"><img src="https://img.shields.io/npm/v/opacity.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/opacity"><img src="https://img.shields.io/npm/l/opacity.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/opacity"><img src="https://img.shields.io/npm/dm/opacity.svg" alt="NPM Downloads" /></a>
</p>

## Blurb

A simple tool used to progressively reduce the `opacity` _(get it?)_ of a website from any given date. 

### Common reasons to use include:
* A client has promised to pay your final instalment, but you don't trust that they'll deliver.
* You'd like your website to have an expiry date, and you're actually desperate enough that `CSS` is your only option to ensure it can't be used.
* You're not quite sure how `CSS transition` works, and you can't think of a single better way to have your website fade out.
* Just fuck you, Dan.

## Installation

```shell
npm install opacity
```
```shell
yarn add opacity
```

## Usage

### Basic
#### Ruin their Christmas

```typescript
import opacity from 'opacity';

const from = new Date(2021, 11, 25);
const to = new Date(2021, 11, 27);

opacity(from, to);
```

### Basic+
#### Don't trouble yourself with having to calculate the end date

```typescript
import opacity from 'opacity';

const from = new Date(2021, 11, 25);
const to = { days: 10 }; // `to` will be caluclated as 10 days after `from`

opacity(from, to);
```

### Senior/Advanced
#### Make them suffer

```typescript
import opacity from 'opacity';

const from = new Date(2021, 11, 25);
const to = { hours: 5 }; // `to` will be caluclated as 5 hours after `from`
const animated = true; // When enabled, the screen will progressively dissapear in front of their eyes

opacity(from, to, animated);
```

## API

```typescript
(from: Date, to: Duration | Date, animated?: boolean): void;

type Duration = {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}
```


## Issues
Perhaps you think you've found an issue, and you're certain it must be with this package? Impossible. The _only_ possible outcome is you've done something wrong. We follow a strong support ethic of it-works-on-my-machine. 

If you require assistance, be sure to ask for help on [StackOverflow](https://stackoverflow.com/) where someone can ignore your question and explain to you how stupid you are. 

## Migrating from v1 to v9
In order to upgrade simply install v9. There's absolutely 0 code changes between v1 and v9, we just think v9 sounded cooler.
