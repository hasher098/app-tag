import { ReactNode, useState } from "react";
import { BsChatLeft, BsPersonAdd } from "react-icons/bs";
import { CiCircleInfo, CiSettings } from "react-icons/ci";
import { PiTag } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import TagDialog from "../tags/TagDialog";
import IconBox from "../tags/components-styled/IconBox";
import ToolbarWrapper from "../tags/components-styled/ToolbarWrapper";
import { DialogType, ToolbarIconProps } from "../tags/types";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Funkcja pomocnicza do renderowania ikon
const renderToolbarIcon = (
  IconComponent: React.ElementType,
  tooltip: string,
  onClick?: () => void
) => (
  <IconBox
    key={tooltip}
    data-tooltip-id="my-tooltip"
    id="my-tooltip"
    data-tooltip-content={tooltip}
    onClick={onClick}
  >
    <IconComponent size={48} />
  </IconBox>
);
export const Toolbar = (): JSX.Element => {
  // Stany/Logika odpowiadająca za zarządzanie otwartym oknem
  const [currentDialog, setCurrentDialog] = useState<DialogType>(null);

  const toggleDialog = (dialog: DialogType) => () => {
    setCurrentDialog((prevDialog) => (prevDialog === dialog ? null : dialog));
  };

  // Tablica elementów służąca do mapowania w toolbarze
  const icons: ToolbarIconProps[] = [
    {
      icon: CiCircleInfo,
      tooltip: "Info",
      dialogType: "info",
      onClick: toggleDialog("info"),
    },
    {
      icon: BsChatLeft,
      tooltip: "Messages",
      dialogType: "messages",
      onClick: toggleDialog("messages"),
    },
    { icon: CiSettings, tooltip: "Settings" }, // Przykład ikony bez dialogu
    {
      icon: PiTag,
      tooltip: "Dodawanie tagów",
      dialogType: "tags",
      onClick: toggleDialog("tags"),
    },
    { icon: BsPersonAdd, tooltip: "Connect" }, // Przykład ikony bez dialogu
  ];

  const renderDialog = (dialog: DialogType): ReactNode => {
    switch (dialog) {
      case "tags":
        return <TagDialog handleClose={toggleDialog("tags")} />;
      // W tym miejscu mozna rozszerzyc o inne okna dialogowe
      // case "info":
      //   return <InfoDialog handleClose={toggleDialog('info')} />;
      // case "messages":
      //   return <MessagesDialog handleClose={toggleDialog('messages')} />;
      default:
        return null;
    }
  };
  return (
    <AppWrapper>
      <ToolbarWrapper>
        {icons.map(({ icon, tooltip, onClick }) =>
          renderToolbarIcon(icon, tooltip, onClick)
        )}
      </ToolbarWrapper>
      {renderDialog(currentDialog)}
      <Tooltip id="my-tooltip" place="left" />
    </AppWrapper>
  );
};
