export const constant = {
  SHAPE_TOOL: "Shape Tool",
  FILL_COLOR: "Fill Color",
  CLEAR_ALL: "Clear All",
  COLOR: "Color",
  SHAPE: "Shape",
};

export const colors = ["red", "green", "yellow", "blue"];

export const shapes = [
  {
    type: "circle",
    width: "20px",
    height: "20px",
    border: "1px solid black",
    borderRadius: "50%",
  }, // circle
  {
    type: "square",
    width: "20px",
    height: "20px",
    border: "1px solid black",
    borderRadius: 0,
  }, // square
  {
    type: "oval",
    width: "40px",
    height: "20px",
    border: "1px solid black",
    borderRadius: "50%",
  }, // oval
  {
    type: "rectangle",
    width: "40px",
    height: "20px",
    border: "1px solid black",
    borderRadius: 0,
  }, // rectangle
];
