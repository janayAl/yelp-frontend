import React from "react";



export function SearchBar () {
  return (
  <>
<div class="field has-addons">
  <p class="control">
    <input class="input" type="text" placeholder="Your Zip Code"/>
  </p>
  <p class="control">
    <button class="button is-static">Search by Zip Code
    </button>
  </p>
</div>
</>
  );
}

