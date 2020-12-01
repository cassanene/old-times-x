import * as React from 'react';
import NavigationBar from './NavigationBar';
import {Button} from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalButton,
} from 'baseui/modal';
import Routes from "./Route";

function UserPrompt() {
    // this may not be the best method for right now but we can change it later

const [isOpen, setIsOpen] = React.useState(true);
    // setIsOpen(true);
function close() {
    setIsOpen(false);
}

function handleRoute() {
    window.location = "/personalbests";
    return(
        <Routes />
    )
}
return (
    <React.Fragment>
        <NavigationBar />
      <Modal isOpen={isOpen}>
        <ModalHeader>View Personal Best or Log out?</ModalHeader>
          <ModalButton kind="tertiary" onClick={close}>
            Cancel
          </ModalButton>
          <ModalButton onClick={close}>
            Logout
          </ModalButton>
          <ModalButton  onClick={handleRoute}>
            Personal Best
          </ModalButton>
      </Modal>
    </React.Fragment>
  );
};

export default UserPrompt;