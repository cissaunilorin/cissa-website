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
  isSubmitting: boolean;
}> = ({ isOpen, onClose, children, onClick, heading, isSubmitting }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{heading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            ml={'auto'}
            onClick={onClick}
            type="submit"
            isLoading={isSubmitting}
          >
            save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
