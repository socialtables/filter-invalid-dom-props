const eventProps = {
	onCopy: true,
	onCut: true,
	onPaste: true,
	onLoad: true,
	onError: true,
	onWheel: true,
	onScroll: true,
	onCompositionEnd: true,
	onCompositionStart: true,
	onCompositionUpdate: true,
	onKeyDown: true,
	onKeyPress: true,
	onKeyUp: true,
	onFocus: true,
	onBlur: true,
	onChange: true,
	onInput: true,
	onSubmit: true,
	onClick: true,
	onContextMenu: true,
	onDoubleClick: true,
	onDrag: true,
	onDragEnd: true,
	onDragEnter: true,
	onDragExit: true,
	onDragLeave: true,
	onDragOver: true,
	onDragStart: true,
	onDrop: true,
	onMouseDown: true,
	onMouseEnter: true,
	onMouseLeave: true,
	onMouseMove: true,
	onMouseOut: true,
	onMouseOver: true,
	onMouseUp: true,
	onSelect: true,
	onTouchCancel: true,
	onTouchEnd: true,
	onTouchMove: true,
	onTouchStart: true,
	onAnimationStart: true,
	onAnimationEnd: true,
	onAnimationIteration: true,
	onTransitionEnd: true
};

const htmlAttributes = {
	abbr: "abbr",
	accept: "accept",
	acceptCharset: "accept-charset",
	accessKey: "accesskey",
	action: "action",
	allowFullScreen: "allowfullscreen",
	allowTransparency: "allowtransparency",
	alt: "alt",
	async: "async",
	autoComplete: "autocomplete",
	autoFocus: "autofocus",
	autoPlay: "autoplay",
	cellPadding: "cellpadding",
	cellSpacing: "cellspacing",
	challenge: "challenge",
	charset: "charset",
	checked: "checked",
	cite: "cite",
	class: "class",
	className: "class",
	cols: "cols",
	colSpan: "colspan",
	command: "command",
	content: "content",
	contentEditable: "contenteditable",
	contextMenu: "contextmenu",
	controls: "controls",
	coords: "coords",
	crossOrigin: "crossorigin",
	data: "data",
	dateTime: "datetime",
	default: "default",
	defer: "defer",
	dir: "dir",
	disabled: "disabled",
	download: "download",
	draggable: "draggable",
	dropzone: "dropzone",
	encType: "enctype",
	for: "for",
	form: "form",
	formAction: "formaction",
	formEncType: "formenctype",
	formMethod: "formmethod",
	formNoValidate: "formnovalidate",
	formTarget: "formtarget",
	frameBorder: "frameBorder",
	headers: "headers",
	height: "height",
	hidden: "hidden",
	high: "high",
	href: "href",
	hrefLang: "hreflang",
	htmlFor: "for",
	httpEquiv: "http-equiv",
	icon: "icon",
	id: "id",
	inputMode: "inputmode",
	isMap: "ismap",
	itemId: "itemid",
	itemProp: "itemprop",
	itemRef: "itemref",
	itemScope: "itemscope",
	itemType: "itemtype",
	kind: "kind",
	label: "label",
	lang: "lang",
	list: "list",
	loading: "loading",
	loop: "loop",
	manifest: "manifest",
	max: "max",
	maxLength: "maxlength",
	media: "media",
	mediaGroup: "mediagroup",
	method: "method",
	min: "min",
	minLength: "minlength",
	multiple: "multiple",
	muted: "muted",
	name: "name",
	noValidate: "novalidate",
	open: "open",
	optimum: "optimum",
	pattern: "pattern",
	ping: "ping",
	placeholder: "placeholder",
	poster: "poster",
	preload: "preload",
	radioGroup: "radiogroup",
	readOnly: "readonly",
	rel: "rel",
	required: "required",
	role: "role",
	rows: "rows",
	rowSpan: "rowspan",
	sandbox: "sandbox",
	scope: "scope",
	scoped: "scoped",
	scrolling: "scrolling",
	seamless: "seamless",
	selected: "selected",
	shape: "shape",
	size: "size",
	sizes: "sizes",
	sortable: "sortable",
	span: "span",
	spellCheck: "spellcheck",
	src: "src",
	srcDoc: "srcdoc",
	srcSet: "srcset",
	start: "start",
	step: "step",
	style: "style",
	tabIndex: "tabindex",
	target: "target",
	title: "title",
	translate: "translate",
	type: "type",
	typeMustMatch: "typemustmatch",
	useMap: "usemap",
	value: "value",
	width: "width",
	wmode: "wmode",
	wrap: "wrap"
};

function isValidDOMProp(prop) {
	return (
		eventProps[prop] ||
		htmlAttributes[prop] ||
		/^(data|aria)-/.test(prop)
	);
}

export default function filterInvalidDOMProps(props) {
	let domProps = {};
	for (let prop in props) {
		if (props.hasOwnProperty(prop) && isValidDOMProp(prop)) {
			domProps[prop] = props[prop];
		}
	}
	return domProps;
}
