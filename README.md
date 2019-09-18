# Prisoner Ipsum API

Web API for [prisoner-ipsum](https://github.com/earthtone/prisoner-ipsum).

### Query Parameters

Custom options can be passed as query  parameters on the request. The response for a request ending in `?p=3&s=15` contain 3 paragraphs - `p` - of 15 "sentences" - `s` - each. Where a "paragraph" is a member of the returned array, and a "sentence" is a space separated substring of each member.
