import {
  Autocomplete,
  Button,
  Checkbox,
  createFilterOptions,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { tagSuggestions } from "../../helpers/suggestions";
import ButtonContainer from "./components-styled/ButtonContainer";
import DialogWrapper from "./components-styled/DialogWrapper";
import Divider from "./components-styled/Divider";
import ListOfSelectedTags from "./components-styled/ListOfSelectedTags";
import RowWrapper from "./components-styled/RowWrapper";
import TagIconBox from "./components-styled/TagIconBox";
import TagWrapper from "./components-styled/TagWrapper";
import Title from "./components-styled/Title";
import RatingBars from "./segments/RatingBars";
import { CmsAi } from "./segments/CmsAi";
import { SelectedTagProps } from "./types";

const TagDialog = ({ handleClose }: { handleClose: () => void }) => {
  // Poniżej przechowujemy stany dla wybranych tagów, zapisanych oraz wpsianej wartości w polu input
  const [selectedTags, setSelectedTags] = useState<SelectedTagProps[]>([]);
  const [tagMemory, setTagMemory] = useState<SelectedTagProps[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Funkcja odpowiedzialna za modyfikację stanu wybranych tagów
  const handleCheckboxChange = (option: SelectedTagProps) => {
    setSelectedTags((prevTags) =>
      prevTags.some((tag) => tag.id === option.id)
        ? prevTags.filter((tag) => tag.id !== option.id)
        : [...prevTags, option]
    );
  };

  // Funkcja odpowiedzialna za zapisywanie tagów do stanu po kliknięciu przycisku zapisz
  const handleSave = () => {
    setTagMemory(selectedTags);
    setInputValue("");
  };

  // Funkcja odpowiedzialna za usuwanie tagów
  const removeTag = (id: string) => {
    setTagMemory((prevTags) => prevTags.filter((tag) => tag.id !== id));
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  };

  // Konfiguracja listy proponowanych tagów, w tym przypadku ustawiona sztywna wartość 10.
  const OPTIONS_LIMIT = 8;
  const filterOptions = createFilterOptions<SelectedTagProps>({
    limit: OPTIONS_LIMIT,
  });

  // Poniżej render całego komponentu, core komponentu znajduje się w MUI Autocomplete
  // Szczegolowy opis modyfikacji znajduje sie w pliku README.md
  return (
    <DialogWrapper>
      <RowWrapper>
        <Title>Tagi</Title>
        <TagIconBox onClick={handleClose}>
          <IoMdClose size={60} />
        </TagIconBox>
      </RowWrapper>
      <RowWrapper>
        <div style={{ width: "100%" }}>
          <Autocomplete
            options={tagSuggestions}
            filterOptions={filterOptions}
            onBlur={() => setSelectedTags(tagMemory)}
            ListboxProps={{ style: { maxHeight: 400, overflow: "hidden" } }}
            disableCloseOnSelect
            // any jest unsafe i nie uzywamy, pozdrawiam jesli ktos to czyta
            getOptionLabel={(option: any) => option.name}
            PaperComponent={({ children }) => (
              <div
                style={{
                  position: "relative",
                  paddingBottom: "40px",
                  background: "white",
                }}
              >
                {children}
                <ButtonContainer>
                  <Button
                    onMouseDown={handleSave}
                    style={{ width: "100%" }}
                    variant="contained"
                    color="primary"
                    disabled={
                      selectedTags.length === 0 && tagMemory.length === 0
                    }
                  >
                    Zapisz
                  </Button>
                </ButtonContainer>
              </div>
            )}
            renderOption={(props, option) => (
              <li
                {...props}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Checkbox
                  icon={<MdCheckBoxOutlineBlank fontSize="large" />}
                  checkedIcon={<MdCheckBox fontSize="large" />}
                  style={{ marginRight: 8 }}
                  onChange={() => handleCheckboxChange(option)}
                  checked={selectedTags.some((tag) => tag.id === option.id)}
                />
                <div style={{ width: "80%" }}>{option.name}</div>
                <div> +{option.power}</div>
              </li>
            )}
            inputValue={inputValue}
            onInputChange={(_event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            isOptionEqualToValue={(option, value) =>
              typeof value === "string"
                ? option.name === value
                : option.name === value?.name
            }
            freeSolo
            onChange={(event, _value, reason) => {
              if (event.type === "keydown") setInputValue(inputValue);
              if (reason === "selectOption") setInputValue(inputValue);
            }}
            value={null}
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiMiniMagnifyingGlass size={24} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  placeholder="Wyszukaj grupę lub tag"
                />
                <Divider />
              </>
            )}
          />
        </div>
      </RowWrapper>
      {/* Render zapisanych tagów */}
      {tagMemory.length > 0 && (
        <>
          <ListOfSelectedTags>
            {tagMemory.map((tag) => (
              <TagWrapper key={tag.id}>
                {tag.name}
                <TagIconBox onClick={() => removeTag(tag.id)}>
                  <IoMdClose size={24} />
                </TagIconBox>
              </TagWrapper>
            ))}
          </ListOfSelectedTags>
          <Divider />
        </>
      )}
      {/* Reszta segmentów komponentu */}
      <CmsAi />
      <Divider />
      <RatingBars power={tagMemory.length} />
    </DialogWrapper>
  );
};

export default TagDialog;
