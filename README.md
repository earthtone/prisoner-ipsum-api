# Prisoner Ipsum API

Web API for [prisoner-ipsum](https://github.com/earthtone/prisoner-ipsum).

### Basic Usage

Return default text

```sh
curl https://mj7cp02g0a.execute-api.us-east-1.amazonaws.com/dev
```

Pass custom options as query parameters

```sh
curl https://mj7cp02g0a.execute-api.us-east-1.amazonaws.com/dev/\?p=3&s=15
```

The above parameters request the response contain 3 paragraphs - `p - of 15 "sentences" - `s` - each. Where a "paragraph" is a member of the returned array, and a "sentence" is a space separated substring of each member.
