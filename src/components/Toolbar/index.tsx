import shapeTool from "../../icons/shapeTool.svg";
import fillColor from "../../icons/fillColor.svg";
import clearAll from "../../icons/clearAll.svg";
import { constant } from "../../const";
import { useDispatch } from "react-redux";
import { setTool } from "../../store/toolsSlice";

const Toolbar = () => {
  const dispatch = useDispatch();

  const handleShapeClick = () => {
    dispatch(setTool("shape"));
  };

  const handleFillColorClick = () => {
    dispatch(setTool("fill"));
  };

  const handleClearClick = () => {
    dispatch(setTool(""));
  };

  return (
    <div style={{ display: "flex", marginBottom: 20, background: "#dce1e3" }}>
      <img
        src={shapeTool}
        alt={constant.SHAPE_TOOL}
        title={constant.SHAPE_TOOL}
        style={{ cursor: "pointer", padding: "10px" }}
        onClick={handleShapeClick}
      />

      <img
        src={fillColor}
        alt={constant.FILL_COLOR}
        title={constant.FILL_COLOR}
        style={{ cursor: "pointer", padding: "10px" }}
        onClick={handleFillColorClick}
      />

      <img
        src={clearAll}
        alt={constant.CLEAR_ALL}
        title={constant.CLEAR_ALL}
        style={{ cursor: "pointer", padding: "10px" }}
        onClick={handleClearClick}
      />
    </div>
  );
};

export default Toolbar;
