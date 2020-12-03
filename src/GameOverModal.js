import * as React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButton,
} from 'baseui/modal';
import Routes from "./Route";

function GameOverPrompt() {

const [isOpen, setIsOpen] = React.useState(true);

function handleRoute() {
    window.location = "/scores";
    return(
        <Routes />
    )
}
return (
    <React.Fragment>
      <Modal 
        isOpen={isOpen}
        overrides={{
            Backdrop: {
            style: () => ({
                backgroundColor: "white",
                opacity: `80%`,
            })
            },
            Dialog: {
            style: () => ({
                backgroundColor: "red",  
            })
            }
        }}
      >
        <ModalHeader>Game Over! Time's Up!</ModalHeader>
        <ModalBody>Press Done to view your score.</ModalBody>
          <ModalButton  onClick={handleRoute}>
            Done
          </ModalButton>
      </Modal>
    </React.Fragment>
  );
};

export default GameOverPrompt;