import { RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'

export const FooterNavbar = () => {
  return (
    <>
      <span className="text-gray-500 text-lg text-center block">
        Creado por <b>Camilo Mora</b>{' '}
      </span>
      <div className="flex items-center justify-center gap-2">
        <a
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          href="https://www.linkedin.com/in/camilo-mora/"
          rel="noreferrer"
          target="_blank"
        >
          <RiLinkedinBoxLine className="text-4xl" />
        </a>
        <a
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          href="https://github.com/CamiloEMP"
          rel="noreferrer"
          target="_blank"
        >
          <RiGithubLine className="text-4xl" />
        </a>
      </div>
    </>
  )
}
