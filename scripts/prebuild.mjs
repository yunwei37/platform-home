import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

// Function to convert a single YAML file to JSON
const convertYamlToJson = (yamlFilePath, jsonFilePath) => {
  const yamlFile = fs.readFileSync(yamlFilePath, 'utf8');
  const jsonData = yaml.load(yamlFile);
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
};

// Read all YAML files in the .search_index/ directory
const yamlDir = '.search_index';
const yamlFiles = fs.readdirSync(yamlDir).filter(file => path.extname(file) === '.yml');

// Initialize counters
const yearCount = {};
const tagCount = {};
const regionCount = {};
const combinedJson = {}; // New object to store all JSON data

// Helper function to increment counts
const incrementCount = (obj, key) => {
  if (key) {
    obj[key] = (obj[key] || 0) + 1;
  }
};

// Process each YAML file
yamlFiles.forEach(file => {
  const yamlFilePath = path.join(yamlDir, file);
  const jsonFilePath = path.join(yamlDir, path.basename(file, '.yml') + '.json');
  const fileKey = path.basename(file, '.yml'); // Get filename without extension

  // Convert YAML to JSON
  convertYamlToJson(yamlFilePath, jsonFilePath);

  // Read the JSON data
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
  
  // Add to combined JSON using filename as key
  combinedJson[fileKey] = jsonData;

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
});

// Combine counts into one meta object
const meta = {
  yearCount,
  tagCount,
  regionCount
};

// Write the meta data to a file
fs.writeFileSync('public/meta.json', JSON.stringify(meta, null, 2));

// Write the combined JSON to a file
fs.writeFileSync('combined_search_index.json', JSON.stringify(combinedJson, null, 2));

console.log('YAML to JSON conversion complete.');
console.log('Combined JSON and meta data generated.');
