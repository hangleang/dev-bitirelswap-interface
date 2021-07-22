/* eslint-disable react/prop-types */
import { ChevronLeftIcon, XIcon } from '@heroicons/react/outline'

import React, { FC } from 'react'

interface ModalHeaderProps {
  title?: string
  className?: string
  onClose?: () => void
  onBack?: () => void
}

const ModalHeader: FC<ModalHeaderProps> = ({
  title = undefined,
  className = '',
  onClose = undefined,
  onBack = undefined,
}) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      {onBack && <ChevronLeftIcon onClick={onBack} width={24} height={24} className="cursor-pointer" />}
      {title && <h2 className="h2 font-bold">{title}</h2>}
      <div
        className="flex items-center justify-center w-6 h-6 cursor-pointer text-primary hover:text-high-emphesis"
        onClick={onClose}
      >
        <XIcon width={24} height={24} />
      </div>
    </div>
  )
}

export default ModalHeader
