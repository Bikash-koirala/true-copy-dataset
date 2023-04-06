import React from "react";

export default function Switch({ checked, setChecked }) {
  return (
    <span>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name="checked"
          id="checked"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <label className="label" htmlFor="checked">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>

      <span>Duplicate</span>
    </span>
  );
}
