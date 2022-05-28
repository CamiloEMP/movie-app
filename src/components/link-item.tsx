import { Link, useLocation } from 'react-router-dom'

interface Props {
  text: string
  href: string
  onClick?: () => void
  icon: JSX.Element
}

export const LinkItem = ({ text, href, icon, onClick }: Props) => {
  const location = useLocation()
  const isActive = location.pathname === href

  return (
    <Link
      className={`flex items-center gap-5 py-1 text-gray-500 border-l-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 transition-colors ${
        isActive ? 'border-orange-500 text-orange-500' : ''
      }`}
      to={href}
      onClick={onClick}
    >
      <div className="ml-5">{icon}</div>
      <span className="capitalize text-lg">{text}</span>
    </Link>
  )
}
