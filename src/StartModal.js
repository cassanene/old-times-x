import * as React from 'react';
import {
  Modal,
  ModalHeader,
  ModalButton,
} from 'baseui/modal';
import Routes from "./Route";

function StartPrompt({start, started}) {
const [isOpen, setIsOpen] = React.useState(true);

function handleStart() {
  setIsOpen(false);
  started[0](true);
  let tempStartTime = new Date();
  start[1](tempStartTime);
}

function handleClick() {
  window.location = "/game";
  return (
    <Routes />
)

}
return (
    <React.Fragment>
      <Modal 
      closeable
      animate
      autoFocus
      isOpen={isOpen}
      overrides={{
        Backdrop: {
          style: () => ({
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
          <ModalButton onClick={handleClick}>
            Go back
          </ModalButton>
      </Modal>
    </React.Fragment>
  );
};

export default StartPrompt;