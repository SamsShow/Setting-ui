import React from "react";
import {
  Tabs,
  Tab,
  Select,
  SelectItem,
  SelectSection,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Textarea,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
  Image,
} from "@nextui-org/react";

export default function App() {
  const radiusList = ["full"];
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedColor, setSelectedColor] = React.useState("default");

  return (
    <div className="w-[529px] h-[120px] pt-[55px] pl-[69px] pb-2 flex-col justify-start items-start gap-5 inline-flex">
      <div className="pt-[3.33px] justify-end items-center inline-flex">
        <div className="w-[189.06px] h-[45px] text-neutral-800  text-[40px] font-bold font-['Inter'] leading-[27px]">
          Settings
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {radiusList.map((radius) => (
          <Tabs key={radius} radius={radius} aria-label="Tabs radius">
            <Tab key="general" title="General">
              <div className="text-black text-lg mt-6 font-semibold font-['Inter'] leading-none">
                Select theme
              </div>
              <Select
                label="Theme"
                // placeholder="Select an animal"
                className="max-w-xs mt-4 w-[342px] h-[43.33px] relative"
              >
                <SelectSection showDivider title="Theme">
                  <SelectItem key="Light">Light</SelectItem>
                  <SelectItem key="Dark">Dark</SelectItem>
                </SelectSection>
              </Select>

              <div className="text-black text-lg font-semibold font-['Inter'] mt-10 leading-none">
                Select language
              </div>
              <Select
                label="Language"
                // placeholder="Select an animal"
                className="max-w-xs mt-4"
              >
                <SelectSection showDivider title="language">
                  <SelectItem key="English(USA)">English(USA)</SelectItem>
                  <SelectItem key="French">French</SelectItem>
                </SelectSection>
              </Select>
            </Tab>

            <Tab key="prompt" title="Prompt">
              <div className="w-[197px] h-[17px] pr-[73px] mt-6 justify-start items-center inline-flex">
                <div className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-none">
                  Active Prompt
                </div>
              </div>
              <div className="flex gap-6 align-center justify-center">
                <Select
                  className="max-w-xs mt-4 w-[342px] h-[43.33px] justify-center items-center inline-flex "
                  label="Prompt Dropdown..."
                >
                  <SelectItem key="Strict">Strict</SelectItem>
                </Select>
                <div>
                  <Button
                    className="w-[101px] h-[42px] px-7 py-1.5 rounded-[62px] border border-violet-600 flex mt-4"
                    color="secondary"
                    onPress={onOpen}
                  >
                    Add new
                  </Button>
                  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">
                            Add Prompt
                            <div className="text-neutral-500 text-xs font-normal">
                              Add your custom prompt and save it to DocsGPT.
                            </div>
                          </ModalHeader>
                          <ModalBody>
                            <Textarea
                              label="Prompt Name"
                              labelPlacement="outside"
                              placeholder="Enter your Prompt Name"
                              className="max-w-xs"
                            />
                            <Textarea
                              label="Prompt Text"
                              labelPlacement="outside"
                              // placeholder="Enter your Prompt Name"
                              className="max-w-xs"
                            />
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              variant="light"
                              onPress={onClose}
                            >
                              Close
                            </Button>
                            <Button color="secondary" onPress={onClose}>
                              Save
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </div>
              </div>
            </Tab>
            <Tab key="documents" title="Documents">
              <div className="flex flex-col gap-3">
                <Table
                  color="secondarys"
                  selectionMode="single"
                  defaultSelectedKeys={["2"]}
                  aria-label="Example static collection table"
                >
                  <TableHeader>
                    <TableColumn>Document Name</TableColumn>
                    <TableColumn>Vector Date</TableColumn>
                    <TableColumn>Vector Name</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Base</TableCell>
                      <TableCell>2001</TableCell>
                      <TableCell>#A1BC</TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>ABC</TableCell>
                      <TableCell>2011</TableCell>
                      <TableCell>#A2BC</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div>
                <Button
                  className="mt-4 left-[270px]"
                  color="secondary"
                  onPress={onOpen}
                >
                  Add new
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Upload New Documentation
                          <div className="text-neutral-500 text-xs font-normal ">
                            Please upload .pdf, .txt, .rst, .docx, .md, .zip
                            limited to 25mb
                          </div>
                        </ModalHeader>
                        <ModalBody>
                          <Textarea
                            label="Name"
                            labelPlacement="outside"
                            placeholder="Enter Name"
                            className="max-w-xs"
                          />
                          <Textarea
                            // label="URL"
                            labelPlacement="outside"
                            placeholder="URL (Optional)"
                            className="max-w-xs"
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Back
                          </Button>
                          <Button color="secondary" onPress={onClose}>
                            Train
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </Tab>
            <Tab key="widgets" title="Widgets">
              <div className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-none mt-6">
                Widget source
              </div>
              <Select
                className="max-w-xs mt-5 w-[342px] h-[43.33px] justify-center items-center inline-flex "
                label="Select widget source"
              >
                {/* <SelectItem key="Strict">Strict</SelectItem> */}
              </Select>
              <div className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-none mt-[24px]">
                Widget method
              </div>
              <Select
                className="max-w-xs mt-5 w-[342px] h-[43.33px] justify-center items-center inline-flex "
                label="Select widget method"
              >
                {/* <SelectItem key="Strict">Strict</SelectItem> */}
              </Select>
              <div className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-none mt-[24px]">
                Widget type
              </div>
              <Select
                className="max-w-xs mt-5 w-[342px] h-[43.33px] justify-center items-center inline-flex "
                label="Select widget type"
              >
                {/* <SelectItem key="Strict">Strict</SelectItem> */}
              </Select>
              <Textarea
                label="Widget Code Snippet"
                labelPlacement="outside"
                placeholder="Widget code... along with some snippets"
                className="max-w-xs mt-7"
              />
              <div className="flex flex-col gap-[16px]">
                <div className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-none mt-7">
                  Widget screenshot
                </div>
                <Image
                  isBlurred
                  width={240}
                  src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                  alt="NextUI Album Cover"
                  classNames={{
                    img: "m-5",
                  }}
                />
              </div>
            </Tab>
          </Tabs>
        ))}
      </div>
    </div>
  );
}
