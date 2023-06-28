import React from "react";

export const VisibilityControl = ({
  setShowCompleted,
  clearTask,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("esta seguro de eliminar esto")) {
      clearTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
          checked={isChecked}
        />{" "}
        <label>Show Tasks Done</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Limpiar
      </button>
    </div>
  );
};
