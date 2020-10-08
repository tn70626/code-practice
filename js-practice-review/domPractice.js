/**
 * Dom Manipulation
 *
 */

const output = document.querySelector('.code-output');

const link = document.createElement('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';
link.classList.add('link');
output.append(link);

const para = document.createElement('p');
para.textContent = 'Hello world';

/**
 * append vs appendChild
 *
 * ParentNode.append() allows you to also append DOMString
 * objects, whereas Node.appendChild() only accepts Node
 * objects.
 *
 * ParentNode.append() has no return value, whereas Node.
 * appendChild() returns the appended Node object.
 *
 * ParentNode.append() can append several nodes and strings,
 * whereas Node.appendChild() can only append one node.
 */
output.appendChild(para);

const text = document.createTextNode(
  ' - This is a wonderfully appended text node'
);

const pContent = document.querySelector('p');
pContent.appendChild(text);

output.appendChild(pContent);

// output.removeChild(pContent);

// pContent.remove();

pContent.style.color = 'red';
pContent.style.fontSize = '19px';
pContent.setAttribute('class', 'highlight');
