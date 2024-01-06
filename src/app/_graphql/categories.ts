export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`
export const CATEGORIES = `categories {
  query Categories {
    Categories(limit: 300) {
      docs {
        id
        title
        media {
          alt
          url
          width
          height
        }
      }
    }
  }
}`
