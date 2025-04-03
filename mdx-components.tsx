import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => {
      const isGif = props.src?.endsWith('.gif');
      return <img {...props} className={`${props.className || ''} rounded-xl ${isGif ? 'animate-gif' : ''}`} />;
    },
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      const isGif = src?.endsWith('.gif');
      return (
        <figure>
          {isGif ? (
            <img 
              src={src} 
              alt={alt} 
              className="rounded-xl animate-gif" 
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <img src={src} alt={alt} className="rounded-xl" />
          )}
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
  }
}
