interface JsonLdProps {
  schema: object;
}

/** Emits a structured data block. Server rendered, so crawlers always see it. */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
