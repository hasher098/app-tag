import RowWrapperInColumn from "../components-styled/RowWrapperInColumn";
import { BsStars } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
export const CmsAi = () => {
  return (
    <RowWrapperInColumn>
      <div
        style={{
          color: "gray",
          display: "flex",
          gap: "15px",
          marginBottom: "10px",
        }}
      >
        <BsStars size={30} /> CMS AI
      </div>
      <div style={{ display: "flex", gap: "15px", marginBottom: "10px" }}>
        <BsStars color="purple" size={30} /> Analizuj tekst
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <IoPricetagOutline color="purple" size={30} /> Najbardziej popularne
        tagi
      </div>
    </RowWrapperInColumn>
  );
};
