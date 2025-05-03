type OGOptions = {
  title: string
  description: string
  image?: string
}

export const generateOGMeta = ({ title, description, image }: OGOptions) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image ?? '/default-og.png',
        },
      ],
    },
  }
}
