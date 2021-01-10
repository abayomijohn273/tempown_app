import React from "react";
import PropTypes from "prop-types";

const HighlistItem = ({ title, content }) => {
  return (
    <dl class="mb-10 space-y-10">
      <div class="flex">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center h-8 w-8 rounded-md bg-temp-green-light text-white">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.94479 12.4581C5.73122 12.4581 5.51764 12.3763 5.35494 12.2136L0.24474 7.10328C-0.0815799 6.77712 -0.0815799 6.24975 0.24474 5.92358C0.570907 5.59742 1.09812 5.59742 1.42444 5.92358L5.94479 10.4439L15.5757 0.813229C15.9018 0.487062 16.429 0.487062 16.7554 0.813229C17.0815 1.13955 17.0815 1.66676 16.7554 1.99308L6.53479 12.2136C6.37209 12.3763 6.15837 12.4581 5.94479 12.4581Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="ml-10">
          <dt class="text-xl leading-6 font-bold text-temp-primary">{title}</dt>
          <dd class="mt-4 text-base text-temp-secondary">{content}</dd>
        </div>
      </div>
    </dl>
  );
};

HighlistItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};
export default HighlistItem;
