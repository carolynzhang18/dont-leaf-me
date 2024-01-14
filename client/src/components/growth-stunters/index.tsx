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
import deleteImg from "../../../public/images/delete.svg";

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

  useEffect(() => {
    const blockedLinks = window.localStorage.getItem("blockedLinks");
    if (blockedLinks) {
      chrome.runtime.sendMessage(
        JSON.parse(blockedLinks),
        function (response) {}
      );
    }
  }, [blockedLinks]);

  return (
    <GrowthContainer>
      <TitleContainer>
        <GrowthTitle>Growth Stunters</GrowthTitle>
        <AddButton onClick={onOpen} 
          style={{backgroundColor: "rgb(159, 220, 159)", width: "40px", height: "40px", borderRadius: "25px", marginLeft:"52px", paddingBottom: "3px"}}>+</AddButton>
      </TitleContainer>
      <GrowthBody style={{marginTop: "10px", paddingBottom: "10px"}}>
        {blockedLinks &&
          blockedLinks.map((link: string, i: number) => (
            <BlockedLinksContainer style={{height: "40px", borderRadius: "10px", fontSize: "16px", marginBottom: "3px"}}>
              <LinkTab>{link.substring(0, 30)}</LinkTab>
              <DeleteImg
                data-key={i}
                src={deleteImg}
                alt="Delete icon"
                onClick={(e) => {
                  const index = e.currentTarget.getAttribute("data-key");
                  if (index) {
                    const intIndex = parseInt(index);
                    const saveBlockedLinks = [
                      ...blockedLinks.slice(0, intIndex),
                      ...blockedLinks.slice(intIndex + 1),
                    ];
                    setBlockedLinks(saveBlockedLinks);
                    localStorage.setItem(
                      "blockedLinks",
                      JSON.stringify(saveBlockedLinks)
                    );
                  }
                }}
              />
            </BlockedLinksContainer>
          ))}
      </GrowthBody>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{width: "80%", marginTop: "100px"}}>
          <ModalHeader>Block a site</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!blockedLinks.includes(value)) {
                const saveBlockedLinks = [...blockedLinks, value];
                setBlockedLinks(saveBlockedLinks);
                localStorage.setItem(
                  "blockedLinks",
                  JSON.stringify(saveBlockedLinks)
                );
                chrome.runtime.sendMessage(
                  JSON.parse(window.localStorage.getItem("blockedLinks")!),
                  function (response) {}
                );
              } else {
                alert("Link already saved!");
              }
              onClose();
            }}
          >
            <FormControl>
              <ModalBody>
                <FormLabel>Enter a link here</FormLabel>
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                  placeholder="https://www.youtube.com"
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
  overflow-y: auto;
  max-height: 286px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const GrowthTitle = styled.h1`
  color: #000;
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

const GrowthBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkTab = styled.div``;

const DeleteImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const BlockedLinksContainer = styled.div`
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px;
  background: #9fdc9f;
  position: relative;
`;

export default GrowthStunters;
