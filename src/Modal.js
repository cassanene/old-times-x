import * as React from 'react';
import NavigationBar from './NavigationBar';
import {Button} from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
} from 'baseui/modal';

function UserPrompt() {
    // this may not be the best method for right now but we can change it later

    const [isOpen, setIsOpen] = React.useState(true);
    // setIsOpen(true);
    function close() {
        setIsOpen(false);
        }
  return (
    <React.Fragment>
        <NavigationBar />
      <Modal isOpen={isOpen}>
        {/* <ModalHeader>View Personal Best or Log out?</ModalHeader> */}
        <ModalBody>View Personal Best or Log out?</ModalBody>
          <ModalButton kind="tertiary" onClick={close}>
            Cancel
          </ModalButton>
          <ModalButton onClick={close}>
            Logout
          </ModalButton>
          <ModalButton  onClick={close}>
            Personal Best
          </ModalButton>
      </Modal>
    </React.Fragment>
  );
};

export default UserPrompt;