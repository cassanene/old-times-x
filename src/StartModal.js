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

function handleClick() {
  // window.location = "/"
}
return (
    <React.Fragment>
      <Modal 
      // onClose={() => setIsOpen(false)}
      closeable
      animate
      autoFocus
      isOpen={isOpen}
      overrides={{
        Backdrop: {
          style: ({$theme}) => ({
            backgroundColor: "white",
            opacity: `95%`,
          })
        },
        Dialog: {
          style: ({$theme}) => ({
            backgroundColor: $theme.colors.backgroundPositive      
          })
        }
      }}
      >
        <ModalHeader>Ready to Start?</ModalHeader>
          <ModalButton onClick={handleStart}>
            Start
          </ModalButton>
          {/* <ModalButton onClick={handleClick}>
            Go back
          </ModalButton> */}
      </Modal>
    </React.Fragment>
  );
};

export default StartPrompt;