import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { removeLayer, undo } from "../../store/canvasSlice";
import { constant } from "../../const";
import clearAll from "../../icons/clearAll.svg";
import undoImage from "../../icons/undo.svg";

const LayersPanel = () => {
  const { layers } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  return (
    <div>
      <img
        src={undoImage}
        alt={constant.UNDO}
        title={constant.UNDO}
        style={{
          cursor: "pointer",
        }}
        onClick={() => dispatch(undo())}
      />
      <ul>
        {layers.length > 0 && <h3>{constant.LAYERS}</h3>}
        {layers.map((_, idx) => (
          <li key={idx}>
            <div style={{ display: "flex" }}>
              Layer {idx + 1}
              <img
                src={clearAll}
                alt={constant.DELETE}
                title={constant.DELETE}
                style={{
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                }}
                onClick={() => dispatch(removeLayer(idx))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayersPanel;
