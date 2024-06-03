import { client } from "./[slug]";

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "field.slug": params.slug,
  });

  return {
    props: { recipe: items[0] },
  };
}
