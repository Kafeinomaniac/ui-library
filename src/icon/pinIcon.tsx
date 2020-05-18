import React from 'react'

import { color } from '../_utils/branding'
import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export interface PinProps extends Icon {
  readonly bgColor?: string
  readonly strokeColor?: string
}

export const PinIcon = ({ bgColor, strokeColor, isDisabled, ...props }: PinProps) => (
  <BaseIcon {...props}>
    <g stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
      <path fill={bgColor} d="M20 9c0 4.9-8 13-8 13S4 13.9 4 9c0-5.1 4.1-8 8-8s8 2.9 8 8z" />
      <circle fill={isDisabled ? 'none' : strokeColor} cx="12" cy="9" r="3" />
    </g>
  </BaseIcon>
)

PinIcon.defaultProps = {
  ...BaseIconDefaultProps,
  bgColor: 'none',
  strokeColor: color.lightMidnightGreen,
}

export default React.memo(PinIcon)
