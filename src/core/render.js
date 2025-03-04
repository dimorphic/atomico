import { diff } from "./diff.js";
import { toVnode, createElement } from "./vnode.js";
import { STATE, NODE_HOST, OBJECT_EMPTY } from "./constants.js";

/**
 *
 * @param {import("./vnode").Vnode} vnode
 * @param {HTMLNode} parent
 * @param {Object} [options]
 **/
export function render(vnode, parent, options = OBJECT_EMPTY) {
	/**@type {ConfigRender}*/
	let config = {
		id: options.id || STATE,
		bind: options.bind,
		host: options.host
	};

	vnode = toVnode(vnode);

	if (!config.host && vnode.type != NODE_HOST) {
		vnode = createElement(NODE_HOST, {}, vnode);
	}

	diff(config, parent, vnode);
}

/**
 * @typedef {(HTMLElement|SVGElement|Text)} HTMLNode
 *
 * @typedef {object} ConfigRender
 * @property {string} id - namespace to store the state of the virtual-dom
 * @property {any} [bind] - Allows to bin events to a context this
 * @property {boolean} [host] - Allows a component to manipulate the main container
 **/
