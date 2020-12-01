import * as React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButton,
} from 'baseui/modal';
import Routes from "./Route";

function GameOverPrompt() {
    // this may not be the best method for right now but we can change it later

const [isOpen, setIsOpen] = React.useState(true);
    // setIsOpen(true);
function close() {
    setIsOpen(false);
}

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
            style: ({$theme}) => ({
                backgroundColor: "white",
                opacity: `80%`,
            })
            },
            // Dialog: {
            // style: ({$theme}) => ({
            //     backgroundColor: "5ad7fe",  
            // })
            // }
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