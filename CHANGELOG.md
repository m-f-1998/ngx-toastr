# Changelog

## 3.0.0

### Breaking changes

- Removed Bootstrap 4 styles (`toastr-bs4-alert`)
- Removed legacy `toastr-old.css` export
- Renamed `toastr-bs5-alert` to `toastr-bs-alert`
- Removed deprecated config type aliases (`GlobalToastrConfig`, `IndividualToastrConfig`, `ToastrConfig`)
- Library source moved to `projects/ngx-toastr/`
- Demo app moved to `projects/demo/`
- Demo build output moved to `dist-demo/` (library continues to publish from `dist/`)
- `provideToastrNoAnimation()` no longer registers `ToastNoAnimation` as a redundant provider
- Renamed `ToastNoAnimation` class to `NoAnimationToast` (`ToastNoAnimation` export kept as deprecated alias)

### Fixes

- Fixed `NoAnimationToast` hover behaviour when `disableTimeOut: 'extendedTimeOut'`
- Fixed `ToastRef.close()` completing subjects that `manualClose()` had already closed
- Fixed `ApplicationRef` destroyed warning when `onActivateTick` runs after test/app teardown

### Improvements

- Extracted shared toast logic into `ToastBaseDirective`
- Added unit tests for `Toast`, `NoAnimationToast`, and `ToastRef`
- Aligned ESLint config and code style with other Angular projects
- Added `prebuild` package.json sync for library manifest metadata
- Updated repository URL to `m-f-1998/ngx-toastr`
- Fixed Sass `mixed-decls` and `color-functions` deprecations in demo styles
- Improved Karma coverage reporting via Angular CLI
- CHANGELOG included in npm package
- Documentation updated for 3.x workspace layout and API changes

### Migration guide (2.x → 3.x)

**Style imports**

```scss
// Before
@import 'ngx-toastr/toastr-bs4-alert';
@import 'ngx-toastr/toastr-bs5-alert';
@import 'ngx-toastr/toastr-old';

// After
@import '@m-f-1998/ngx-toastr/toastr';
@import '@m-f-1998/ngx-toastr/toastr-bs-alert';
```

**Types**

```typescript
// Before
import { GlobalToastrConfig, IndividualToastrConfig } from '@m-f-1998/ngx-toastr'

// After
import { GlobalConfig, IndividualConfig } from '@m-f-1998/ngx-toastr'
```

**No-animation toast component**

```typescript
// Before
import { ToastNoAnimation } from '@m-f-1998/ngx-toastr'

// After (preferred)
import { NoAnimationToast } from '@m-f-1998/ngx-toastr'

// Still works (deprecated alias)
import { ToastNoAnimation } from '@m-f-1998/ngx-toastr'
```

**angular.json styles**

```json
// Before
"node_modules/ngx-toastr/toastr.css"

// After
"node_modules/@m-f-1998/ngx-toastr/toastr.css"
```
