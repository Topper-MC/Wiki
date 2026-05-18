const fs = require('fs');
const path = require('path');

const docsDir = '/home/hsgamer/WebstormProjects/Topper.Wiki/docs';
const baseUrl = '';

// Helper to recursively walk a directory
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

// Function to convert links to root links in a file
function convertLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileDir = path.dirname(filePath);
  
  // Regex to find markdown links: [label](url)
  // Ensure we don't match image links (like ![alt](url)) by asserting no leading "!"
  const linkRegex = /([^!]|^)\[([^\]]+)\]\(([^)]+)\)/g;
  
  let modified = false;
  const newContent = content.replace(linkRegex, (match, prefix, label, url) => {
    url = url.trim();
    const originalUrl = url;
    
    // Strip leading /Wiki prefix if present
    let strippedUrl = url;
    if (strippedUrl.startsWith('/Wiki/')) {
      strippedUrl = strippedUrl.substring(5);
    } else if (strippedUrl === '/Wiki') {
      strippedUrl = '/';
    }
    
    // Ignore external links, mailto links, anchor-only links
    if (
      strippedUrl.startsWith('http://') || 
      strippedUrl.startsWith('https://') || 
      strippedUrl.startsWith('mailto:') || 
      strippedUrl.startsWith('#')
    ) {
      return match;
    }
    
    // Ignore images/assets
    if (strippedUrl.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
      return match;
    }
    
    let finalUrl = '';
    
    // If it is a root link (starts with /), it is already correct
    if (strippedUrl.startsWith('/')) {
      finalUrl = strippedUrl;
    } else {
      // It's a relative path! We need to resolve it relative to fileDir and convert to root path relative to docsDir
      const hashIndex = strippedUrl.indexOf('#');
      let urlPath = hashIndex !== -1 ? strippedUrl.substring(0, hashIndex) : strippedUrl;
      const urlHash = hashIndex !== -1 ? strippedUrl.substring(hashIndex) : '';
      
      // Resolve absolute path on disk
      let resolvedPath = path.resolve(fileDir, urlPath);
      
      // Compute relative path from docsDir
      let relativeFromDocs = path.relative(docsDir, resolvedPath);
      
      // Convert to web path (forward slashes)
      let webPath = relativeFromDocs.replace(/\\/g, '/');
      
      // Strip trailing /index.md or /index.mdx if present
      webPath = webPath.replace(/\/index\.(md|mdx)$/, '/');
      webPath = webPath.replace(/index\.(md|mdx)$/, '');
      
      // Strip other .md or .mdx extensions
      webPath = webPath.replace(/\.(md|mdx)$/, '/');
      
      // Ensure we start with / and don't have double slashes
      if (!webPath.startsWith('/')) {
        webPath = '/' + webPath;
      }
      
      // Ensure it ends with a slash if it's a directory/page path
      if (!webPath.endsWith('/')) {
        webPath = webPath + '/';
      }
      
      finalUrl = webPath + urlHash;
    }
    
    if (originalUrl !== finalUrl) {
      console.log(`[CONVERT] File: ${path.relative(docsDir, filePath)} | Link: ${originalUrl} -> ${finalUrl}`);
      modified = true;
      return `${prefix}[${label}](${finalUrl})`;
    }
    
    return match;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
}

const files = walk(docsDir);
console.log(`Found ${files.length} markdown files. Converting links to root links...`);
files.forEach(convertLinks);
console.log('Finished converting links!');
