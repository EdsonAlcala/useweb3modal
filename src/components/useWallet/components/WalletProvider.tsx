import React, { useState } from 'react'
import styled from 'styled-components'

interface InfoCardProps {
  active?: boolean
}

// TODO: Change background color background-color: ${({ theme, active }) => (active ? theme.bg3 : theme.bg2)};
const InfoCard = styled.button<InfoCardProps>`
  padding: 1rem;
  outline: none;
  border: 1px solid;
  border-radius: 12px;
  width: 100% !important;
  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary1};
  }
  border-color: ${({ theme, active }) => (active ? 'transparent' : '#EDEEF2')};
`

const OptionCard = styled(InfoCard as any)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
`

interface ProviderCardClickable {
  clickable?: boolean
}

const OptionCardClickable = styled(OptionCard as any) <ProviderCardClickable>`
  margin-top: 0;
  &:hover {
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
    border: ${({ clickable }) => (clickable ? `1px solid red` : ``)};
  }
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  background-color: white;
`

const OptionCardLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
`

// TODO 
// color: ${props => (props.color === 'blue' ? ({ theme }) => theme.primary1 : ({ theme }) => theme.text1)};
const HeaderText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  font-weight: 500;
`

// subheader  color: ${({ theme }) => theme.text1};
const SubHeader = styled.div`
  margin-top: 10px;
  font-size: 12px;
`

interface IconProps {
  size?: number | null
}

const IconWrapper = styled.div<IconProps>` 
  align-items: center;
  justify-content: center;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '24px')};
    width: ${({ size }) => (size ? size + 'px' : '24px')};
  }
`


export interface WalletCardOption {
  id: string
  header: React.ReactNode
  subheader: React.ReactNode | null
  href?: string | null
  clickable?: boolean
  onClick?: null | (() => void)
  color: string
  icon: string
  active?: boolean
  // size?: number | null
}

const GreenCircle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &:first-child {
    height: 8px;
    width: 8px;
    margin-right: 8px;
    background-color: #27AE60;
    border-radius: 50%;
  }
`

const CircleWrapper = styled.div`
  color: #27AE60;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WalletProvider: React.FC<WalletCardOption> = (props: WalletCardOption) => {
  const { id, onClick, clickable, active, header, subheader, icon, color } = props
  return (
    <OptionCardClickable id={id} onClick={onClick} clickable={clickable && !active} active={active}>
      <OptionCardLeft>
        <HeaderText>
          {active ? (
            <CircleWrapper>
              <GreenCircle>
                <div />
              </GreenCircle>
            </CircleWrapper>
          ) : (
              ''
            )}
          {header}
        </HeaderText>
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </OptionCardLeft>
      <IconWrapper size={48}>
        <img src={icon} alt={'Icon'} />
      </IconWrapper>
    </OptionCardClickable>

  )

}
