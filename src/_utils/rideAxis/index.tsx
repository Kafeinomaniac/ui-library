import React from 'react'
import styled from 'styled-components'

import { ArrowIcon } from '../../icon'
import { space } from '../branding'

const StyledRideAxis = styled.span`
  display: flex;
  align-items: center;
`

const StyledArrowIcon = styled(ArrowIcon)`
  & {
    display: inline-block;
    margin: 0 ${space.s};
    height: 1em;
  }
`

export interface RideAxisProps {
  readonly from?: string
  readonly to?: string
}

export const RideAxis = ({ from, to, ...props }: RideAxisProps) => (
  <StyledRideAxis {...props}>
    {from && <span>{from}</span>}
    {from && to && <StyledArrowIcon right />}
    {to && <span>{to}</span>}
  </StyledRideAxis>
)
