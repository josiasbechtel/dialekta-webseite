import { ButtonLink } from '@/components/button-link'
import { IconBadge } from '@/components/icon-badge'

type OfferCardProps = {
  label: string
  title: string
  text: string
  points: string[]
  href: string
  cta: string
  featured?: boolean
}

export function OfferCard({ label, title, text, points, href, cta, featured }: OfferCardProps) {
  return (
    <article className={`card ${featured ? 'teal' : ''}`}>
      <IconBadge label={label} />
      <p className="eyebrow dark">{label}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <ul className="check-list">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="section-actions">
        <ButtonLink href={href} variant={featured ? 'light' : 'secondary'}>
          {cta}
        </ButtonLink>
      </div>
    </article>
  )
}

export function SimpleCard({
  title,
  text,
  featured,
}: {
  title: string
  text: string
  featured?: boolean
}) {
  return (
    <article className={`card ${featured ? 'teal' : ''}`}>
      <IconBadge label={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export function PriceCard({
  title,
  price,
  text,
  featured,
}: {
  title: string
  price: string
  text: string
  featured?: boolean
}) {
  return (
    <article className={`card price ${featured ? 'teal' : ''}`}>
      <h3>{title}</h3>
      <p className="price-value">{price}</p>
      <p>{text}</p>
    </article>
  )
}
