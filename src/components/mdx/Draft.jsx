import React from "react"

export default function Draft({ children }) {
  return (
    <div className="draft ">

      <div class="d-flex align-items-center mb-3">
        <div class="flex-grow-1">
          <div className="border-top"></div>
        </div>
        <div class="text-center px-3">
          <h2 className="h6 m-0 p-0">Writing in progress</h2>
        </div>
        <div class="flex-grow-1">
          <div className="border-top"></div>
        </div>
      </div>

      <p className="px-5 text-center">Whatever you may find below this point is unedited, likely unoriginal, potentially illogical content which I am collecting to further gather my thoughts on this topic.</p>
    </div>
  );
}