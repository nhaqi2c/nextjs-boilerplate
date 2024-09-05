'use client';
// ^ Make sure to have 'use client'; because `setBasePath()` requires access to `document`.

import { setBasePath } from "@webcomponents/i2cwebcomponents/dist/utilities/base-path.js"

export default function DSMSetup({
  children,
}: {
  children: React.ReactNode
}) {
  setBasePath(`/dsm-assets/`);
  return <>{children}</>
}
