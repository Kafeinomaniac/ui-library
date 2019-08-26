import React, { Component, Ref } from 'react'

import Modal, { ModalSize } from 'modal'
import { ModalProps } from 'modal/Modal'
import Button, { ButtonStatus } from 'button'
import Text, { TextTagType, TextDisplayType } from 'text'
import { color } from '_utils/branding'

export interface SuccessModalProps extends ModalProps {
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
}

class SuccessModal extends Component<SuccessModalProps> {
  static defaultProps: Partial<SuccessModalProps> = {
    isOpen: false,
    closeOnEsc: false,
    size: ModalSize.MEDIUM,
    forwardedRef: null,
    imageText: '',
  }

  render() {
    const {
      isOpen,
      children,
      size,
      onClose,
      confirmLabel,
      forwardedRef,
      imageSrc,
      imageText,
      ariaLabelledBy,
      ariaDescribedBy,
      className,
    } = this.props

    const baseClassName = 'kirk-successModal'

    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={size}
        closeOnEsc={false}
        displayCloseButton={false}
        displayDimmer={false}
        forwardedRef={forwardedRef}
        className={className}
        modalContentClassName={baseClassName}
        ariaLabelledBy={ariaLabelledBy}
        ariaDescribedBy={ariaDescribedBy}
      >
        <img
          className={`${baseClassName}-bodyItem ${baseClassName}-image`}
          src={imageSrc}
          alt={imageText}
        />
        <div className={`${baseClassName}-bodyItem`}>
          <Text
            display={TextDisplayType.SUBHEADER}
            tag={TextTagType.PARAGRAPH}
            textColor={color.white}
          >
            {children}
          </Text>
          <footer className={`${baseClassName}-footer`}>
            <Button
              status={ButtonStatus.SECONDARY}
              className={`${baseClassName}-confirmButton`}
              onClick={onClose}
            >
              {confirmLabel}
            </Button>
          </footer>
        </div>
      </Modal>
    )
  }
}

export default SuccessModal