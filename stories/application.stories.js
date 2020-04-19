import { base, filename } from 'paths.macro';
import { toStoryHierarchy } from '../src/lib/story';

export default {
  title: toStoryHierarchy(base,filename)
};

import markdown from '../gallery/simple/application/excel.md';
export const Excel = () => '<img src="simple/application/excel.svg?sanitize=true" alt="Excel 2013 Icon" height="128px" width="128px" >';

Excel.story = {
  name: "Excel 2013",
  parameters: {
    notes: { markdown }
  }
};
