import { base, filename } from 'paths.macro';
import { toStoryHierarchy, generate } from './story';

test('toStoryHiearchy: Example of usage with the paths macro import', () => {
    // stories is added because this is the base
    expect(toStoryHierarchy("/stories"+base, filename)).toBe('src/lib/story');
});

test('toStoryHiearchy: example with a literal path (given)', () => {
    // manual real path
    expect(toStoryHierarchy('/stories/sales/', 'icons.stories.js')).toBe('sales/icons');
});

test('toStoryHiearchy: example with only a directory path', () => {
    // manual real path
    expect(toStoryHierarchy('/stories/sales_process/')).toBe('sales process');
});

test('generate: example with a literal path (given)', () => {
    
    let groupTitle = "process business"
    const dir = "/stories/"+groupTitle.replace(" ","_")+"/";
    let script = generate(dir)
    let expected = 
`import { base, filename } from 'paths.macro';

export default {
    title: "${groupTitle}"
};`
    expect(script).toBe(expected);

});