# react-native-web-wrappers

This contains some wrappers i have wrote for different components in my journey of converting an existing RN app to RNW. **Some or most of the wrappers here are still WIP, even ones which are implemented are only as per our use case and does not cover all cases hence cannot be used as generic wrappers.**

(You can find my blog series on converting RN app to RNW here.(WIP at the time of writing).)[https://medium.com/@ziaulrehman/part-1-converting-react-native-app-to-react-native-web-react-pwa-in-monorepo-architecture-34b43cad74b8]

If you find these wrappers helpful and want to contribute an enhancement, please do.

Some implementations(like Alert) are copied from some other open source places, some are gathered with help of hit and trial and some github issues or SO questions.

### Currently useable wrappers:
`Alert`: Will create mobile like alerts on web, not ideal but gets work done, you can modify how alerts appear on web later on. But it implements RN's Alert API pretty good, so is a very good choice.
**Disclaimer:** Alert implementation is picked from open source online sources.

`circularProgress`(limited).

`reduxStorage`: Use-able for `redux-persist` setup, this wrapper provides appropriate storage option for mobile and web platforms.

`Router`: Is useable for generic routes implementation using `react-router` and `react-router-native`.

### How to use?
Simply place the wrappers at some place in your project, and import them like
```
import Alert from `path/to/folder/wrappers/Alert/Alert`
```
And it will load appropriate file for each platform. You can also choose to create some aliases instead, for webpack, if you like.

### TODO:

1- Add description of each wrapper individually in the readme.

2- Update wrappers where needed.

**I will try to post updates to this repo whenever we have some more updates on these wrappers to share.**

_Please pardon lack of attributions for now, i will try to add them when possible._
