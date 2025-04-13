import "./ColorShapes.css";
import { colors } from "../../const";
import { constant } from "../../const";
import { shapes } from "../../const";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setColor, setShape } from "../../store/toolsSlice";

const ControlPanel = () => {
  const { selectedTool, selectedColor, selectedShape } = useSelector(
    (state: RootState) => state.tools
  );
  const dispatch = useDispatch();

  const indexVal = 2;
  if (!selectedTool) return null;

  const onHandleShapeChange = (index: number) => {
    dispatch(setShape(index));
  };

  const onHandleColorChange = (index: number) => {
    dispatch(setColor(index));
  };

  return (
    <div style={{ border: "2px solid #615b5b", height: "130px" }}>
      <h3>{constant.SHAPE_TOOL}</h3>
      <div className="container">
        <div style={{ marginRight: "25px" }}>
          {constant.COLOR}
          <br />
          <div className="container">
            {colors.map((color, index) => {
              return (
                <div className="shapes" key={index}>
                  <div
                    className="square color-box"
                    style={{
                      cursor: "pointer",
                      background: `${color}`,
                      margin: "5px",
                      border: selectedColor === index ? "2px solid Black" : "",
                    }}
                    onClick={() => onHandleColorChange(index)}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        {selectedTool === "shape" && (
          <div className="container">
            <div style={{ marginRight: "25px" }}>
              {constant.SHAPE}
              <br />
              <div
                className="container"
                style={{ display: "flex", gap: "10px" }}
              >
                {shapes.map((shape, index) => (
                  <div
                    key={index}
                    style={{
                      ...shape,
                      cursor: "pointer",
                      margin: "5px",
                      backgroundColor:
                        selectedShape === index ? "#383332" : "lightgray",
                    }}
                    onClick={() => onHandleShapeChange(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
