import { Link } from 'react-router-dom'

interface Props {
  text: string
  href: string
  icon: JSX.Element
}

export const LinkItem = ({ text, href, icon }: Props) => {
  return (
    <Link
      className="flex items-center gap-5 py-1 text-gray-500 border-l-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 transition-colors"
      to={href}
    >
      <div className="ml-5">{icon}</div>
      <span className="capitalize text-lg">{text}</span>
    </Link>
  )
}
