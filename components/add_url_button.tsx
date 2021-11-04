import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  HStack,
  IconButton,
  FormErrorMessage,
  ButtonGroup,
  FormControl,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { AddIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import { isValidUrl } from "../lib/utils";
const AddUrlButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef<HTMLDivElement>(null);
  const [urlInput, setUrlInput] = useState("");

  ///
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
  };

  const validateUrl = (url: string) => {
    return isValidUrl(url) ? "" : "Invalid URL";
  };
  return (
    <>
      <ButtonGroup onClick={onOpen} size="md" isAttached variant="outline">
        <Button mr="-px">Add</Button>
        <IconButton aria-label="Add bookmark, paste url" icon={<AddIcon />} />
      </ButtonGroup>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter/ Paste Url</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Formik
              initialValues={{ url: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <Field name="url" validate={validateUrl}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.url && form.touched.url}
                      >
                        <Input
                          autoComplete="off"
                          {...field}
                          id="url"
                          placeholder="https://"
                        />
                        <FormErrorMessage>{form.errors.url}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <HStack py="5" placeItems="end">
                    <Spacer />
                    <Button variant="ghost" onClick={onClose}>
                      Close
                    </Button>
                    <Button
                      isLoading={props.isSubmitting}
                      colorScheme="blue"
                      type="submit"
                      mr={3}
                    >
                      Submit
                    </Button>
                  </HStack>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddUrlButton;