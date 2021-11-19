# Opacity 🔎

## Blurb

A simple tool used to progressively reduce the `opacity` _(get it?)_ of a website from any given date. 

Common reasons to use include:
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
