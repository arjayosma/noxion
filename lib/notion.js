// Refer to the documentation here: https://developers.notion.com/docs
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_SECRET_KEY });

// Retrieve the database
export const getDatabase = async (filter) => {
  const options = {
    database_id: process.env.NOTION_DATABASE_ID,
  };

  if (filter) {
    options.filter = filter;
  }

  const response = await notion.databases.query(options);
  return response.results;
};

// Retrieve the specific page
export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

// Retrieve the blocks of a specific page
export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({ block_id: blockId });
  return response.results;
};
