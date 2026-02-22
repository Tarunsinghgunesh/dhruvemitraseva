/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/payment`; params?: Router.UnknownInputParams; } | { pathname: `/services`; params?: Router.UnknownInputParams; } | { pathname: `/status`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/dev/theme-lab`; params?: Router.UnknownInputParams; } | { pathname: `/oauth/callback`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/payment`; params?: Router.UnknownOutputParams; } | { pathname: `/services`; params?: Router.UnknownOutputParams; } | { pathname: `/status`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/dev/theme-lab`; params?: Router.UnknownOutputParams; } | { pathname: `/oauth/callback`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/payment${`?${string}` | `#${string}` | ''}` | `/services${`?${string}` | `#${string}` | ''}` | `/status${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/dev/theme-lab${`?${string}` | `#${string}` | ''}` | `/oauth/callback${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/payment`; params?: Router.UnknownInputParams; } | { pathname: `/services`; params?: Router.UnknownInputParams; } | { pathname: `/status`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/dev/theme-lab`; params?: Router.UnknownInputParams; } | { pathname: `/oauth/callback`; params?: Router.UnknownInputParams; };
    }
  }
}
