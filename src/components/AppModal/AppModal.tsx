import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC, MouseEventHandler, ReactNode } from 'react';

const AppModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onClick: MouseEventHandler;
  heading: string;
  actionBtn?: string;
  w?: string;
  isSubmitting: boolean;
}> = ({
  isOpen,
  onClose,
  children,
  onClick,
  heading,
  isSubmitting,
  w,
  actionBtn,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={w || '500px'} maxW={'90%'}>
        <ModalHeader>{heading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button
            colorScheme='blue'
            ml={'auto'}
            onClick={onClick}
            type='submit'
            isLoading={isSubmitting}>
            {actionBtn || 'save'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
