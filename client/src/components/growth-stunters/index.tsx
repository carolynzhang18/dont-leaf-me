import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

const GrowthStunters: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState<string>("");
  const [blockedLinks, setBlockedLinks] = useState<string[]>([]);
  useEffect(() => {
    const storedBlockedLinksString = localStorage.getItem("blockedLinks");
    if (storedBlockedLinksString) {
      const storedBlockedLinks = JSON.parse(storedBlockedLinksString);
      setBlockedLinks(storedBlockedLinks);
    }
  }, []);


  return (
    <GrowthContainer>
      <TitleContainer>
        <GrowthTitle>Growth Stunters</GrowthTitle>
        <AddButton onClick={onOpen}>Add</AddButton>
      </TitleContainer>
      <GrowthBody>
        {blockedLinks &&
          blockedLinks.map((link: string) => <LinkTab>{link}</LinkTab>)}
      </GrowthBody>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Block a site</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const saveBlockedLinks = [...blockedLinks, value];
              setBlockedLinks(saveBlockedLinks);
              localStorage.setItem(
                "blockedLinks",
                JSON.stringify(saveBlockedLinks)
              );
              chrome.runtime.sendMessage(JSON.parse(window.localStorage.getItem('blockedLinks')!), function(response) {});
              onClose();
            }}
          >
            <FormControl>
              <ModalBody>
                <FormLabel>Enter a link here</FormLabel>
                <Input
                  onChange={(e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                  placeholder="https://youtube.com"
                  type="url"
                  required
                />
              </ModalBody>
              <ModalFooter>
                <SubmitButton>Submit</SubmitButton>
              </ModalFooter>
            </FormControl>
          </form>
        </ModalContent>
      </Modal>
    </GrowthContainer>
  );
};

const GrowthContainer = styled.div`
  position: absolute;
  top: 20%;
  width: 300px;
  box-sh
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const GrowthTitle = styled.h1`
  color: #000;
  font-family: Kadwa;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AddButton = styled.button`
  border-radius: 8px;
  background: #9fdc9f;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 44px;
  width: 80px;

  border: 0;

  color: #000;

  font-family: Kadwa;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    cursor: pointer;
    background: #88bf88;
  }
`;

const SubmitButton = styled(AddButton)``;

const GrowthBody = styled.div``;

const LinkTab = styled.div`
  border-radius: 2px;
  background: #9fdc9f;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export default GrowthStunters;
