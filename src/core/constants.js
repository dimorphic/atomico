export const ARRAY_EMPTY = [];
export const OBJECT_EMPTY = {};

export const STATE = Symbol("Atomico.state");
export const NODE_TYPE = "localName";

export const NODE_HOST = "host";

export const COMPONENT_CREATE = 0x61;
export const COMPONENT_UPDATE = 0x74;
export const COMPONENT_CREATED = 0x4f;
export const COMPONENT_UPDATED = 0x4d;
export const COMPONENT_CLEAR = 0x49;
export const COMPONENT_REMOVE = 0x43;

export const IGNORE_PROPS = {
	children: 1
};

export const IGNORE_CHILDREN = {
	innerHTML: 1,
	textContent: 1,
	contenteditable: 1
};

export const HYDRATE_PROPS = {
	className: 1,
	id: 1,
	checked: 1,
	value: 1,
	selected: 1
};

export const MEMO_EVENT_NAME = {};
export const MEMO_CSS_PROPS = {};
