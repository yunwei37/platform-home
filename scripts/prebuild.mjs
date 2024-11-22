import fs from 'fs';
import yaml from 'js-yaml';

// Read the YAML file
const yamlFile = fs.readFileSync('combined_index.yml', 'utf8');

// Convert YAML to JSON
const jsonData = yaml.load(yamlFile);

// Write the JSON data to a file
fs.writeFileSync('combined_index.json', JSON.stringify(jsonData, null, 2));

// Initialize counters
const yearCount = {};
const tagCount = {};
const regionCount = {};

// Helper function to increment counts
const incrementCount = (obj, key) => {
  if (key) {
    obj[key] = (obj[key] || 0) + 1;
  }
};

// Process the JSON data
Object.values(jsonData).forEach(item => {
  // Count the year in the date field
  const year = item['date'] ? item['date'].split('-')[0] : '未知';
  incrementCount(yearCount, year);

  // Count the tags (if any)
  if (item.tags) {
    item.tags.forEach(tag => incrementCount(tagCount, tag));
  }

  // Count the region (if any)
  incrementCount(regionCount, item.region);
});

// Combine counts into one meta object
const meta = {
  yearCount,
  tagCount,
  regionCount
};

// Write the meta data to a single file
fs.writeFileSync('public/meta.json', JSON.stringify(meta, null, 2));

console.log('YAML to JSON conversion complete.');
console.log('Meta data:', meta);