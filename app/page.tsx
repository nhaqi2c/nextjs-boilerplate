// app/page.tsx
'use client';

import React from "react";
import dynamic from "next/dynamic";

const I2cButton = dynamic(
  // Notice how we use the full path to the component. If you only do `import("@webcomponents/i2cwebcomponents/dist/react")` you will load the entire component library and not get tree shaking.
  () => import("@webcomponents/i2cwebcomponents/dist/react/button/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

const I2cIcon = dynamic(
  () => import("@webcomponents/i2cwebcomponents/dist/react/icon/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);
const I2cListGroup = dynamic(
  () => import("@webcomponents/i2cwebcomponents/dist/react/list-group/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);
const I2cListItem = dynamic(
  () => import("@webcomponents/i2cwebcomponents/dist/react/list-item/index.js"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);



export default function Home() {
  return (
    <main>
      <I2cListGroup
      list-title="List Item Heading"
      list-sub-title="Group Supporting Text"
      list-value="List item group and supporting gtext goes here"
    >
      <I2cListItem variant="receipt" label="List Item" sublabel="$10/month" value="Find the best solution for you.">
        <I2cIcon
          color="var(--featured-icon-light-fg-brand)" featuredColorBg="var(--utility-brand-100)"
          featured
          slot="prefix"
          name="cs-linear-layers-two"
          variant="featured"
        ></I2cIcon>
        <I2cButton slot="suffix" variant="secondary gray" size="medium">
          {' '}
          Secondary{' '}
        </I2cButton>
        <I2cButton slot="suffix" variant="primary" size="medium">
          {' '}
          Primary{' '}
        </I2cButton>
      </I2cListItem>
      <I2cListItem variant="receipt" label="List Item" sublabel="$10/month" value="Find the best solution for you.">
        <I2cIcon
          color="var(--featured-icon-light-fg-brand)" featuredColorBg="var(--utility-brand-100)"
          featured
          slot="prefix"
          name="cs-linear-layers-two"
          variant="featured"
        ></I2cIcon>
        <I2cButton slot="suffix" variant="secondary gray" size="medium">
          {' '}
          Secondary{' '}
        </I2cButton>
        <I2cButton slot="suffix" variant="primary" size="medium">
          {' '}
          Primary{' '}
        </I2cButton>
      </I2cListItem>
      <I2cListItem variant="receipt" label="List Item" sublabel="$10/month" value="Find the best solution for you.">
        <I2cIcon
          color="var(--featured-icon-light-fg-brand)" featuredColorBg="var(--utility-brand-100)"
          featured
          slot="prefix"
          name="cs-linear-layers-two"
          variant="featured"
        ></I2cIcon>
        <I2cButton slot="suffix" variant="secondary gray" size="medium">
          {' '}
          Secondary{' '}
        </I2cButton>
        <I2cButton slot="suffix" variant="primary" size="medium">
          {' '}
          Primary{' '}
        </I2cButton>
      </I2cListItem>
      <I2cListItem variant="receipt" label="List Item" sublabel="$10/month" value="Find the best solution for you.">
        <I2cIcon
          color="var(--featured-icon-light-fg-brand)" featuredColorBg="var(--utility-brand-100)"
          featured
          slot="prefix"
          name="cs-linear-layers-two"
          variant="featured"
        ></I2cIcon>
        <I2cButton slot="suffix" variant="secondary gray" size="medium">
          {' '}
          Secondary{' '}
        </I2cButton>
        <I2cButton slot="suffix" variant="primary" size="medium">
          {' '}
          Primary{' '}
        </I2cButton>
      </I2cListItem>
    </I2cListGroup>
    </main>
  );
}
