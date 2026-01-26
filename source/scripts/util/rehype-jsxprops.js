/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').RootContent} RootContent
 */

const yaml = require('yaml');

/**
 * @param {string} value
 */
function isBlockComment(value) {
    return value.startsWith('/*') && value.endsWith('*/');
}

/**
 * @param {RootContent} node
 * @param {string} content
 */
function assignPropertiesToJSXElement(node, content) {
    if (node && node.type === 'element') {
        try {
            const props = yaml.parse(content.slice(2, -2).trim());
            if (typeof props === 'object' && props !== null) {
                Object.assign(node.properties, props);
            }
        } catch { }
        return true;
    }
}

/**
 * @param {Root | RootContent} node
 * @param {number} index
 * @param {Root | RootContent} parent
 */
function traverse(node, index, parent) {
    // block JSX comment - next sibling is the newline text node, so we look two ahead
    if (node.type === 'mdxFlowExpression' && isBlockComment(node.value)) {
        assignPropertiesToJSXElement(parent.children[index + 2], node.value);
        return;
    }
    // inline JSX comment - apply props to next sibling if it is a JSX element, otherwise apply to parent
    if (node.type === 'mdxTextExpression' && isBlockComment(node.value)) {
        assignPropertiesToJSXElement(parent.children[index + 1], node.value) || assignPropertiesToJSXElement(parent, node.value);
        return;
    }
    if (node.children && Array.isArray(node.children)) {
        node.children.forEach((child, index) => traverse(child, index, node));
    }
}

/**
 * @returns {(tree: Root) => Root}
 */
function rehypeJSXProps() {
    return (tree) => {
        traverse(tree, 0, null);
        return tree;
    };
}

module.exports = rehypeJSXProps;
