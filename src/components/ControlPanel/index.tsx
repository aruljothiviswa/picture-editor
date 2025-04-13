import "./ColorShapes.css";
import { colors } from "../../const";
import { constant } from "../../const";
import { shapes } from "../../const";

const ControlPanel = () => {
  const selectedTool = "shape";
  const indexVal = 2;
  if (!selectedTool) return null;

  const onHandleShapeChange = (e: any) => {
    console.log("onHandleShapeChange", e);
  };

  const onHandleColorChange = (e: any) => {
    console.log("onHandleColorChange", e);
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
                      border: indexVal === index ? "2px solid Black" : "",
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
                        indexVal === index ? "#383332" : "lightgray",
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
