import React from "react";



export function SearchBar () {
  return (
    <>
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Item" />
        </p>
        <p class="control">
          <button class="button is-static">Search Item</button>
        </p>
        <p class="control">
          <input class="input" type="text" placeholder="Zip Code" />
        </p>

        <p class="control">
          <button class="button is-static">Search Zip Code</button>
        </p>
      </div>
    </>
  );
}

