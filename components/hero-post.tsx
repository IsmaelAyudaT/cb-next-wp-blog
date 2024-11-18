import Avatar from './avatar'
import Date from './date'
import Link from 'next/link'

export default function HeroPost({
  title,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <section className={'card card-normal card-body bg-primary-content shadow-xl'}>
      <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
          <div>
            {categories && categories.length > 0 && (
              <div className="categories">
                {categories.map((category, index) => (
                  <span key={index} className="category">
                    {category.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  )
}