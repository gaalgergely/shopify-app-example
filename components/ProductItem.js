import { ResourceList, Stack, TextStyle, Thumbnail } from "@shopify/polaris";
import { MinusMinor } from "@shopify/polaris-icons";
import React from "react";

function ProductItem({ product }) {
  const image = product.images[0] ? product.images[0].originalSrc : MinusMinor;
  const media = <Thumbnail source={image} />;
  const price = product.variants[0].price;

  return (
    <ResourceList.Item
      media={media}
      id={product.id}
      accessibilityLabel={`View details for ${product.title}`}
    >
      <Stack>
        <Stack.Item fill>
          <h4>
            <TextStyle variation="strong">{product.title}</TextStyle>
          </h4>
        </Stack.Item>
        <Stack.Item>
          <p>${price}</p>
        </Stack.Item>
      </Stack>
    </ResourceList.Item>
  );
}

export default ProductItem;
