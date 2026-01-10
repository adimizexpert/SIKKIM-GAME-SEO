import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  item: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  currentPage: string
  currentPath: string
}

export default function Breadcrumbs({ items, currentPage, currentPath }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sikkimgamelogin.com/" },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": item.item
      })),
      { "@type": "ListItem", "position": items.length + 2, "name": currentPage, "item": `https://sikkimgamelogin.com${currentPath}` }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              <span className="breadcrumb-separator">›</span>
              <Link href={item.item.replace('https://sikkimgamelogin.com', '')}>{item.name}</Link>
            </li>
          ))}
          <li className="breadcrumb-item active">
            <span className="breadcrumb-separator">›</span>
            <span>{currentPage}</span>
          </li>
        </ol>
      </nav>
      <style jsx>{`
        .breadcrumbs {
          padding: 1rem 0;
          margin-bottom: 1rem;
        }
        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 0.5rem;
        }
        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
        .breadcrumb-item a {
          color: #425fef;
          text-decoration: none;
          transition: color 0.3s;
        }
        .breadcrumb-item a:hover {
          color: #3245cc;
          text-decoration: underline;
        }
        .breadcrumb-item.active {
          color: #333;
          font-weight: 500;
        }
        .breadcrumb-separator {
          color: #999;
        }
        @media (max-width: 768px) {
          .breadcrumbs {
            padding: 0.75rem 0;
          }
          .breadcrumb-item {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  )
}

