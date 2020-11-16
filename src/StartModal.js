import * as React from 'react';
import {
  Modal,
  ModalHeader,
  ModalButton,
} from 'baseui/modal';

function StartPrompt({start}) {
    // this may not be the best method for right now but we can change it later

const [isOpen, setIsOpen] = React.useState(true);

function handleStart() {
  setIsOpen(false);
  let tempStartTime = new Date();
  start[1](tempStartTime);
  console.log("time: ", start[0]);
}
return (
    <React.Fragment>
      <Modal isOpen={isOpen}>
        <ModalHeader>Ready to Start?</ModalHeader>
          <ModalButton onClick={handleStart}>
            Start
          </ModalButton>
      </Modal>
    </React.Fragment>
  );
};

export default StartPrompt;