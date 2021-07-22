import { Menu, Transition } from '@headlessui/react'
import { LANGUAGES, SUPPORTED_LOCALES, DEFAULT_LOCALE } from 'constants/locales'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { useUserLocaleManager } from 'state/user/hooks'
import { classNames } from 'utils'

export default function LanguageSwitch() {
  const [userLocale, setUserLocale] = useUserLocaleManager()

  return (
    <Menu as="div" className="relative inline-block">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold bg-transparent rounded text-primary">
              <img
                src={LANGUAGES[userLocale || DEFAULT_LOCALE].flag}
                alt={LANGUAGES[userLocale || DEFAULT_LOCALE].language}
                width={27}
                height={27}
              />
              <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-[161px] mt-2 origin-top-right divide-y divide-dark-600 rounded shadow-lg bg-dark-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2 space-y-2">
                {SUPPORTED_LOCALES.map((locale) => {
                  const { flag, language, dialect } = LANGUAGES[locale]
                  return (
                    <Menu.Item key={locale}>
                      {({ active }) => (
                        <button onClick={() => setUserLocale(locale)}>
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-dark-700 text-high-emphesis' : 'text-primary',
                              'group flex items-center px-4 py-2 text-sm hover:bg-dark-700 focus:bg-dark-700 rounded'
                            )}
                          >
                            <img
                              className="inline mr-1 align-middle"
                              src={flag}
                              width={23}
                              height={23}
                              alt={language}
                              aria-hidden="true"
                            />
                            <span className="ml-4">{language}</span>
                            {dialect && (
                              <sup>
                                <small>{dialect}</small>
                              </sup>
                            )}
                          </a>
                        </button>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
